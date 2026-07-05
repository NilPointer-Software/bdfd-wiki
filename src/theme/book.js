"use strict";

// Fix back button cache problem
window.onunload = function () {};

// --- Helpers: line height recalculation for numbered lines ----
function updateLineHeightsFor(pre) {
  if (!pre) return;
  const codeContainer = pre.querySelector(".code-container") || pre.querySelector("code");
  if (!codeContainer) return;

  const lineNumbers = codeContainer.querySelectorAll(".line-number");
  const codeLines = codeContainer.querySelectorAll(".code-line");

  if (!lineNumbers || lineNumbers.length === 0 || !codeLines || codeLines.length === 0) return;

  // Allow layout to settle then measure
  requestAnimationFrame(() => {
    for (let i = 0; i < codeLines.length; i++) {
      const line = codeLines[i];
      const ln = lineNumbers[i];
      if (line && ln) {
        // Use scrollHeight so wrapped lines increase height
        const h = line.scrollHeight || line.offsetHeight || 0;
        if (h > 0) {
          ln.style.height = h + "px";
        } else {
          ln.style.removeProperty("height");
        }
      }
    }
  });
}

// Recalc all pre blocks (debounced)
(function attachResizeAndRecalc() {
  let raf = null;
  function recalcAll() {
    document.querySelectorAll("pre").forEach((pre) => updateLineHeightsFor(pre));
  }
  function onResize() {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      recalcAll();
      raf = null;
    });
  }
  window.addEventListener("resize", onResize, { passive: true });
  // also recalc on font load if needed
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(recalcAll).catch(() => {});
  }
})();

// --- Highlight.js safe init (if available) ---
if (typeof hljs !== "undefined" && hljs) {
  try {
    hljs.configure({ tabReplace: "    ", languages: [] });
  } catch (e) {}
  document.querySelectorAll("code").forEach((block) => {
    try {
      if (typeof hljs.highlightElement === "function") hljs.highlightElement(block);
      else if (typeof hljs.highlightBlock === "function") hljs.highlightBlock(block);
    } catch (e) {}
    block.classList.add("hljs");
  });
}

// --- Create buttons container and buttons if missing ---
function ensureButtonsForPre(pre) {
  if (!pre) return;
  let buttons = pre.querySelector(".buttons");
  if (!buttons) {
    buttons = document.createElement("div");
    buttons.className = "buttons";
    pre.insertBefore(buttons, pre.firstChild);
  }
  // create buttons if not present (clip, wrap, syntax, wide)
  if (!buttons.querySelector(".clip-button")) {
    const clipButton = document.createElement("button");
    clipButton.className = "fa clip-button";
    clipButton.title = "Copy";
    clipButton.setAttribute("aria-label", "Copy code");
    const tip = document.createElement("i");
    tip.className = "tooltiptext";
    clipButton.appendChild(tip);
    buttons.appendChild(clipButton);
  }
  if (!buttons.querySelector(".wrap-button")) {
    const wrapButton = document.createElement("button");
    wrapButton.className = "fa wrap-button";
    wrapButton.title = "Wrap code";
    wrapButton.setAttribute("aria-label", "Toggle wrap");
    buttons.appendChild(wrapButton);
  }
  if (!buttons.querySelector(".syntax-button")) {
    const syntaxButton = document.createElement("button");
    syntaxButton.className = "fa syntax-button";
    syntaxButton.title = "Toggle highlighting style";
    syntaxButton.setAttribute("aria-label", "Toggle syntax styling");
    buttons.appendChild(syntaxButton);
  }
  if (!buttons.querySelector(".wide-button")) {
    const wideButton = document.createElement("button");
    wideButton.className = "fa wide-button";
    wideButton.title = "Wide window";
    wideButton.setAttribute("aria-label", "Open code in wide/fullscreen");
    buttons.appendChild(wideButton);
  }
}

// Initialize buttons for existing pre blocks
document.querySelectorAll("pre").forEach((pre) => {
  // don't touch playground-specific classes
  if (pre.classList.contains("playground")) return;
  ensureButtonsForPre(pre);
  // initial heights calc
  updateLineHeightsFor(pre);
});

// --- Delegated click handling for buttons (works even for cloned/overlayed nodes) ---
document.addEventListener("click", (event) => {
  const wrapBtn = event.target.closest && event.target.closest(".wrap-button");
  if (wrapBtn) {
    const pre = wrapBtn.closest("pre");
    if (!pre) return;
    const codeContainer = pre.querySelector(".code-container") || pre.querySelector("code");
    if (!codeContainer) return;
    codeContainer.classList.toggle("wrap-enabled");
    // recalc heights after layout changes
    requestAnimationFrame(() => updateLineHeightsFor(pre));
    setTimeout(() => updateLineHeightsFor(pre), 120);
    return;
  }

  const syntaxBtn = event.target.closest && event.target.closest(".syntax-button");
  if (syntaxBtn) {
    const pre = syntaxBtn.closest("pre");
    if (!pre) return;
    const codeBlock = pre.querySelector("code");
    if (!codeBlock) return;
    codeBlock.querySelectorAll("span").forEach((span) => span.classList.toggle("nostyle"));
    requestAnimationFrame(() => updateLineHeightsFor(pre));
    setTimeout(() => updateLineHeightsFor(pre), 120);
    return;
  }

  const wideBtn = event.target.closest && event.target.closest(".wide-button");
  if (wideBtn) {
    const pre = wideBtn.closest("pre");
    if (!pre) return;
    openWide(pre);
    return;
  }

  const clipBtn = event.target.closest && event.target.closest(".clip-button");
  if (clipBtn) {
    const pre = clipBtn.closest("pre");
    if (!pre) return;
    const codeElement = pre.querySelector("code");
    if (!codeElement) return;
    // Prefer navigator.clipboard
    let textToCopy = "";
    const codeLines = codeElement.querySelectorAll(".code-line");
    if (codeLines && codeLines.length > 0) {
      const parts = [];
      codeLines.forEach((ln) => parts.push(ln.textContent || ""));
      textToCopy = parts.join("\n");
    } else {
      textToCopy = codeElement.textContent || "";
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        const tip = clipBtn.querySelector(".tooltiptext");
        if (tip) tip.textContent = "Copied!";
        setTimeout(() => { if (tip) tip.textContent = ""; }, 1400);
      }).catch(() => {
        // fallback: try execCommand
        fallbackCopy(textToCopy, clipBtn);
      });
    } else {
      fallbackCopy(textToCopy, clipBtn);
    }
    return;
  }
});

// fallback copy implementation
function fallbackCopy(text, clipBtn) {
  try {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    const tip = clipBtn && clipBtn.querySelector(".tooltiptext");
    if (tip) tip.textContent = ok ? "Copied!" : "Copy failed";
    setTimeout(() => { if (tip) tip.textContent = ""; }, 1400);
  } catch (e) {
    const tip = clipBtn && clipBtn.querySelector(".tooltiptext");
    if (tip) tip.textContent = "Copy failed";
    setTimeout(() => { if (tip) tip.textContent = ""; }, 1400);
  }
}

// --- Fullscreen / wide handling ---
// Opens element in fullscreen when possible, otherwise shows overlay clone.
// Ensures buttons stay visible and functional in fullscreen/overlay.
function openWide(pre) {
  if (!pre) return;
  // If Fullscreen API supported, request fullscreen on the pre element.
  // Using element.requestFullscreen will move the pre element into fullscreen, keeping buttons and behavior.
  if (pre.requestFullscreen) {
    pre.requestFullscreen().catch(() => {
      // if requestFullscreen failed (e.g., blocked), fallback to overlay
      openOverlay(pre);
    });
    // After entering fullscreen, recalc once (fullscreenchange listener handles recalc too)
    setTimeout(() => updateLineHeightsFor(pre), 100);
    return;
  }
  // Fallback to overlay
  openOverlay(pre);
}

function openOverlay(pre) {
  // create overlay and clone the pre to avoid moving original (so page layout stays)
  const overlay = document.createElement("div");
  overlay.className = "wide-overlay";
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.zIndex = "999999";
  overlay.style.background = "rgba(0,0,0,0.9)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.padding = "12px";

  // clone the pre (deep clone), and make it scrollable and wide
  const clone = pre.cloneNode(true);
  clone.classList.add("wide-clone");
  clone.style.maxHeight = "100%";
  clone.style.width = "100%";
  clone.style.overflow = "auto";
  // ensure cloned buttons exist (they are cloned as children but event listeners are delegated)
  overlay.appendChild(clone);

  // close button
  const closeBtn = document.createElement("button");
  closeBtn.className = "close-wide";
  closeBtn.title = "Close";
  closeBtn.setAttribute("aria-label", "Close wide view");
  closeBtn.style.position = "fixed";
  closeBtn.style.top = "12px";
  closeBtn.style.right = "12px";
  closeBtn.style.zIndex = "1000000";
  closeBtn.style.fontSize = "20px";
  closeBtn.style.background = "transparent";
  closeBtn.style.color = "#fff";
  closeBtn.style.border = "none";
  closeBtn.style.cursor = "pointer";
  closeBtn.textContent = "✕";

  closeBtn.addEventListener("click", () => {
    try { document.body.removeChild(overlay); } catch (e) {}
    try { document.body.removeChild(closeBtn); } catch (e) {}
    document.removeEventListener("keydown", escHandler);
  });

  // append to body
  document.body.appendChild(overlay);
  document.body.appendChild(closeBtn);

  // recalc heights for cloned block
  updateLineHeightsFor(clone);

  // pressing Escape closes overlay
  function escHandler(e) {
    if (e.key === "Escape") {
      try { document.body.removeChild(overlay); } catch (e) {}
      try { document.body.removeChild(closeBtn); } catch (e) {}
      document.removeEventListener("keydown", escHandler);
    }
  }
  document.addEventListener("keydown", escHandler);
}

// Recalculate heights when entering/exiting native fullscreen
document.addEventListener("fullscreenchange", () => {
  const fs = document.fullscreenElement;
  if (fs) {
    // in fullscreen: recalc for any contained pre
    fs.querySelectorAll && fs.querySelectorAll("pre").forEach((pre) => updateLineHeightsFor(pre));
    // add exit button inside fullscreen element if not present
    if (!fs.querySelector(".close-fullscreen")) {
      const btn = document.createElement("button");
      btn.className = "close-fullscreen";
      btn.title = "Exit full screen";
      btn.setAttribute("aria-label", "Exit full screen");
      btn.style.position = "absolute";
      btn.style.top = "8px";
      btn.style.right = "8px";
      btn.style.zIndex = "2147483647";
      btn.style.background = "transparent";
      btn.style.color = "#fff";
      btn.style.border = "none";
      btn.style.cursor = "pointer";
      btn.style.fontSize = "20px";
      btn.textContent = "✕";
      btn.addEventListener("click", () => {
        if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
      });
      fs.style.position = "relative";
      fs.appendChild(btn);
    }
  } else {
    // exited fullscreen: recalc whole page
    document.querySelectorAll("pre").forEach((pre) => updateLineHeightsFor(pre));
  }
});

// --- Observers: watch for code content changes (e.g. highlighting async) and update heights ---
const mutationObserver = new MutationObserver((mutations) => {
  const updatedPre = new Set();
  for (const m of mutations) {
    const pre = m.target.closest && m.target.closest("pre");
    if (pre) updatedPre.add(pre);
  }
  updatedPre.forEach((pre) => {
    // schedule recalculation after layout settles
    requestAnimationFrame(() => updateLineHeightsFor(pre));
    setTimeout(() => updateLineHeightsFor(pre), 120);
  });
});

// Observe body for additions that may contain code blocks; limit to subtree to detect new code lines
mutationObserver.observe(document.body, { childList: true, subtree: true });

// Also observe each code block for character changes (for dynamic highlights)
// set up observers for existing code blocks
document.querySelectorAll("pre code, pre .code-container").forEach((el) => {
  try {
    mutationObserver.observe(el, { childList: true, subtree: true, characterData: true });
  } catch (e) {}
});

// --- Initial heights adjustment after page load ---
window.addEventListener("load", () => {
  document.querySelectorAll("pre").forEach((pre) => updateLineHeightsFor(pre));
  // ensure buttons for any dynamically added blocks
  document.querySelectorAll("pre").forEach((pre) => ensureButtonsForPre(pre));
}, { passive: true });