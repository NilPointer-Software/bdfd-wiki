"use strict";

function updateLineHeightsFor(pre){
  if(!pre) return;
  const codeContainer = pre.querySelector(".code-container") || pre.querySelector("code");
  if(!codeContainer) return;
  const lineNumbers = codeContainer.querySelectorAll(".line-number");
  const codeLines = codeContainer.querySelectorAll(".code-line");
  if(!lineNumbers.length || !codeLines.length) return;
  requestAnimationFrame(()=>{
    for(let i=0;i<codeLines.length;i++){
      const line = codeLines[i];
      const ln = lineNumbers[i];
      if(line && ln){
        const h = line.scrollHeight || line.offsetHeight || 0;
        if(h>0) ln.style.height = h + "px";
        else ln.style.removeProperty("height");
      }
    }
  });
}

(function(){
  let raf=null;
  function recalcAll(){
    document.querySelectorAll("pre").forEach(pre=>updateLineHeightsFor(pre));
  }
  function onResize(){
    if(raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(()=>{
      recalcAll();
      raf = null;
    });
  }
  window.addEventListener("resize", onResize, {passive:true});
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(recalcAll).catch(()=>{});
})();

if(typeof hljs!=="undefined" && hljs){
  try{ hljs.configure({tabReplace:"    ", languages:[]}); }catch(e){}
  document.querySelectorAll("code").forEach(block=>{
    try{
      if(typeof hljs.highlightElement==="function") hljs.highlightElement(block);
      else if(typeof hljs.highlightBlock==="function") hljs.highlightBlock(block);
    }catch(e){}
    block.classList.add("hljs");
  });
}

function ensureButtonsForPre(pre){
  if(!pre || pre.classList.contains("playground")) return;
  let buttons = pre.querySelector(".buttons");
  if(!buttons){
    buttons = document.createElement("div");
    buttons.className = "buttons";
    pre.insertBefore(buttons, pre.firstChild);
  }
  if(!buttons.querySelector(".clip-button")){
    const b = document.createElement("button");
    b.className = "fa clip-button";
    b.title = "Copy";
    b.setAttribute("aria-label","Copy code");
    const t = document.createElement("i");
    t.className = "tooltiptext";
    b.appendChild(t);
    buttons.appendChild(b);
  }
  if(!buttons.querySelector(".wrap-button")){
    const b = document.createElement("button");
    b.className = "fa wrap-button";
    b.title = "Wrap code";
    b.setAttribute("aria-label","Toggle wrap");
    buttons.appendChild(b);
  }
  if(!buttons.querySelector(".syntax-button")){
    const b = document.createElement("button");
    b.className = "fa syntax-button";
    b.title = "Toggle highlighting";
    b.setAttribute("aria-label","Toggle highlighting");
    buttons.appendChild(b);
  }
  if(!buttons.querySelector(".wide-button")){
    const b = document.createElement("button");
    b.className = "fa wide-button";
    b.title = "Wide window";
    b.setAttribute("aria-label","Open wide view");
    buttons.appendChild(b);
  }
}

document.querySelectorAll("pre").forEach(pre=>{
  ensureButtonsForPre(pre);
  updateLineHeightsFor(pre);
});

document.addEventListener("click", event=>{
  const wrapBtn = event.target.closest && event.target.closest(".wrap-button");
  if(wrapBtn){
    const pre = wrapBtn.closest("pre");
    if(!pre) return;
    const codeContainer = pre.querySelector(".code-container") || pre.querySelector("code");
    if(!codeContainer) return;
    codeContainer.classList.toggle("wrap-enabled");
    requestAnimationFrame(()=>updateLineHeightsFor(pre));
    setTimeout(()=>updateLineHeightsFor(pre),120);
    return;
  }
  const syntaxBtn = event.target.closest && event.target.closest(".syntax-button");
  if(syntaxBtn){
    const pre = syntaxBtn.closest("pre");
    if(!pre) return;
    const codeBlock = pre.querySelector("code");
    if(!codeBlock) return;
    const spans = codeBlock.querySelectorAll("span");
    spans.forEach(s=>s.classList.toggle("nostyle"));
    requestAnimationFrame(()=>updateLineHeightsFor(pre));
    setTimeout(()=>updateLineHeightsFor(pre),120);
    return;
  }
  const clipBtn = event.target.closest && event.target.closest(".clip-button");
  if(clipBtn){
    const pre = clipBtn.closest("pre");
    if(!pre) return;
    const codeElement = pre.querySelector("code");
    if(!codeElement) return;
    const codeLines = codeElement.querySelectorAll(".code-line");
    let text="";
    if(codeLines && codeLines.length>0){
      const parts=[];
      codeLines.forEach(ln=>parts.push(ln.textContent||""));
      text = parts.join("\n");
    }else text = codeElement.textContent||"";
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(()=>{
        const tip = clipBtn.querySelector(".tooltiptext");
        if(tip) tip.textContent = "Copied!";
        setTimeout(()=>{ if(tip) tip.textContent = ""; },1400);
      }).catch(()=>{ fallbackCopy(text, clipBtn); });
    }else fallbackCopy(text, clipBtn);
    return;
  }
  const wideBtn = event.target.closest && event.target.closest(".wide-button");
  if(wideBtn){
    const pre = wideBtn.closest("pre");
    if(!pre) return;
    openWide(pre);
    return;
  }
});

function fallbackCopy(text, clipBtn){
  try{
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(area);
    const tip = clipBtn && clipBtn.querySelector(".tooltiptext");
    if(tip) tip.textContent = ok ? "Copied!" : "Copy failed";
    setTimeout(()=>{ if(tip) tip.textContent = ""; },1400);
  }catch(e){
    const tip = clipBtn && clipBtn.querySelector(".tooltiptext");
    if(tip) tip.textContent = "Copy failed";
    setTimeout(()=>{ if(tip) tip.textContent = ""; },1400);
  }
}

function openWide(pre){
  if(!pre) return;
  const overlay = document.createElement("div");
  overlay.className = "code-wide-overlay";
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.zIndex = "2147483646";
  overlay.style.background = "#000";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.padding = "12px";
  overlay.style.boxSizing = "border-box";
  const wrapper = document.createElement("div");
  wrapper.className = "code-wide-wrapper";
  wrapper.style.width = "100%";
  wrapper.style.height = "100%";
  wrapper.style.overflow = "auto";
  wrapper.style.display = "flex";
  wrapper.style.alignItems = "stretch";
  wrapper.style.justifyContent = "center";
  wrapper.style.boxSizing = "border-box";
  const clone = pre.cloneNode(true);
  clone.style.maxWidth = "none";
  clone.style.width = "100%";
  clone.style.maxHeight = "100%";
  clone.style.margin = "0";
  clone.style.boxSizing = "border-box";
  clone.classList.add("wide-clone");
  wrapper.appendChild(clone);
  overlay.appendChild(wrapper);
  const closeBtn = document.createElement("button");
  closeBtn.className = "close-wide";
  closeBtn.setAttribute("aria-label","Close wide view");
  closeBtn.textContent = "✕";
  closeBtn.style.position = "fixed";
  closeBtn.style.top = "12px";
  closeBtn.style.right = "12px";
  closeBtn.style.zIndex = "2147483647";
  closeBtn.style.fontSize = "20px";
  closeBtn.style.background = "transparent";
  closeBtn.style.color = "#fff";
  closeBtn.style.border = "none";
  closeBtn.style.cursor = "pointer";
  function removeOverlay(){
    try{ if(document.fullscreenElement) document.exitFullscreen().catch(()=>{}); }catch(e){}
    try{ document.body.removeChild(overlay); }catch(e){}
    try{ document.body.removeChild(closeBtn); }catch(e){}
    document.removeEventListener("keydown", escHandler);
  }
  closeBtn.addEventListener("click", removeOverlay);
  document.body.appendChild(overlay);
  document.body.appendChild(closeBtn);
  updateLineHeightsFor(clone);
  function escHandler(e){
    if(e.key==="Escape") removeOverlay();
  }
  document.addEventListener("keydown", escHandler);
  if(overlay.requestFullscreen){
    overlay.requestFullscreen().catch(()=>{});
  }
  overlay.addEventListener("fullscreenchange", ()=>{
    updateLineHeightsFor(clone);
    if(!document.fullscreenElement){
      try{ document.body.removeChild(overlay); }catch(e){}
      try{ document.body.removeChild(closeBtn); }catch(e){}
      document.removeEventListener("keydown", escHandler);
    }
  });
}

document.addEventListener("fullscreenchange", ()=>{
  const el = document.fullscreenElement;
  if(el) el.querySelectorAll && el.querySelectorAll("pre").forEach(pre=>updateLineHeightsFor(pre));
  else document.querySelectorAll("pre").forEach(pre=>updateLineHeightsFor(pre));
});

const obs = new MutationObserver(mutations=>{
  const pres = new Set();
  for(const m of mutations){
    if(m.target){
      const p = m.target.closest && m.target.closest("pre");
      if(p) pres.add(p);
    }
  }
  pres.forEach(pre=>{
    requestAnimationFrame(()=>updateLineHeightsFor(pre));
    setTimeout(()=>updateLineHeightsFor(pre),120);
  });
});
obs.observe(document.body,{childList:true,subtree:true});
document.querySelectorAll("pre code, pre .code-container").forEach(el=>{
  try{ obs.observe(el,{childList:true,subtree:true,characterData:true}); }catch(e){}
});
window.addEventListener("load", ()=>{ document.querySelectorAll("pre").forEach(pre=>updateLineHeightsFor(pre)); document.querySelectorAll("pre").forEach(pre=>ensureButtonsForPre(pre)); }, {passive:true});