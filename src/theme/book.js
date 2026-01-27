"use strict";

// Fix back button cache problem
window.onunload = function () {};

// Syntax highlighting Configuration
hljs.configure({
	tabReplace: "    ", // 4 spaces
	languages: [], // Languages used for auto-detection
});

document.querySelectorAll("code").forEach((block) => {
	hljs.highlightBlock(block);
	block.classList.add("hljs");
});

if (window.playground_copyable) {
	document.querySelectorAll("pre code").forEach((block) => {
		const pre_block = block.parentNode;
		if (!pre_block.classList.contains("playground")) {
			let buttons = pre_block.querySelector(".buttons");
			if (!buttons) {
				buttons = document.createElement("div");
				buttons.className = "buttons";
				pre_block.insertBefore(buttons, pre_block.firstChild);
			}

			const clipButton = document.createElement("button");
			clipButton.className = "fa fa-regular fa-paste clip-button";
			clipButton.title = "Copy";
			clipButton.setAttribute("aria-label", clipButton.title);
			clipButton.innerHTML = '<i class="tooltiptext"></i>';

			const wrapButton = document.createElement("button");
			wrapButton.className = "fa fa-solid fa-paragraph wrap-button";
			wrapButton.title = "Wrap code";
			wrapButton.setAttribute("aria-label", wrapButton.title);

			const syntaxButton = document.createElement("button");
			syntaxButton.className = "fa fa-header syntax-button";
			syntaxButton.title = "Highlighting";
			syntaxButton.setAttribute("aria-label", syntaxButton.title);

			buttons.insertBefore(clipButton, buttons.firstChild);
			buttons.insertBefore(wrapButton, buttons.firstChild);
			buttons.insertBefore(syntaxButton, buttons.firstChild);
		}
	});
}

(function sidebar() {
	var body = document.querySelector("body");
	var sidebar = document.getElementById("sidebar");
	var sidebarLinks = document.querySelectorAll("#sidebar a");
	var sidebarToggleButton = document.getElementById("sidebar-toggle");
	var sidebarResizeHandle = document.getElementById("sidebar-resize-handle");
	var firstContact = null;

	function showSidebar() {
		body.classList.remove("sidebar-hidden");
		body.classList.add("sidebar-visible");
		Array.from(sidebarLinks).forEach(function (link) {
			link.setAttribute("tabIndex", 0);
		});
		sidebarToggleButton.setAttribute("aria-expanded", true);
		sidebar.setAttribute("aria-hidden", false);
		try {
			localStorage.setItem("mdbook-sidebar", "visible");
		} catch (e) {}
	}

	function hideSidebar() {
		body.classList.remove("sidebar-visible");
		body.classList.add("sidebar-hidden");
		Array.from(sidebarLinks).forEach(function (link) {
			link.setAttribute("tabIndex", -1);
		});
		sidebarToggleButton.setAttribute("aria-expanded", false);
		sidebar.setAttribute("aria-hidden", true);
		try {
			localStorage.setItem("mdbook-sidebar", "hidden");
		} catch (e) {}
	}

	// Toggle sidebar
	sidebarToggleButton.addEventListener("click", function sidebarToggle() {
		if (body.classList.contains("sidebar-hidden")) {
			var current_width = parseInt(
				document.documentElement.style.getPropertyValue(
					"--sidebar-width"
				),
				10
			);
			if (current_width < 150) {
				document.documentElement.style.setProperty(
					"--sidebar-width",
					"150px"
				);
			}
			showSidebar();
		} else if (body.classList.contains("sidebar-visible")) {
			hideSidebar();
		} else {
			if (getComputedStyle(sidebar)["transform"] === "none") {
				hideSidebar();
			} else {
				showSidebar();
			}
		}
	});

	sidebarResizeHandle.addEventListener("mousedown", initResize, false);

	function initResize(e) {
		window.addEventListener("mousemove", resize, false);
		window.addEventListener("mouseup", stopResize, false);
		body.classList.add("sidebar-resizing");
	}
	function resize(e) {
		var pos = e.clientX - sidebar.offsetLeft;
		if (pos < 20) {
			hideSidebar();
		} else {
			if (body.classList.contains("sidebar-hidden")) {
				showSidebar();
			}
			pos = Math.min(pos, window.innerWidth - 100);
			document.documentElement.style.setProperty(
				"--sidebar-width",
				pos + "px"
			);
		}
	}
	//on mouseup remove windows functions mousemove & mouseup
	function stopResize(e) {
		body.classList.remove("sidebar-resizing");
		window.removeEventListener("mousemove", resize, false);
		window.removeEventListener("mouseup", stopResize, false);
	}

	document.addEventListener(
		"touchstart",
		function (e) {
			firstContact = {
				x: e.touches[0].clientX,
				time: Date.now(),
			};
		},
		{ passive: true }
	);

	document.addEventListener(
		"touchmove",
		function (e) {
			if (!firstContact) return;

			var curX = e.touches[0].clientX;
			var xDiff = curX - firstContact.x,
				tDiff = Date.now() - firstContact.time;

			if (tDiff < 250 && Math.abs(xDiff) >= 150) {
				if (
					xDiff >= 0 &&
					firstContact.x <
						Math.min(document.body.clientWidth * 0.25, 300)
				)
					showSidebar();
				else if (xDiff < 0 && curX < 300) hideSidebar();

				firstContact = null;
			}
		},
		{ passive: true }
	);
})();

(function chapterNavigation() {
	document.addEventListener("keydown", function (e) {
		if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
			return;
		}
		if (window.search && window.search.hasFocus()) {
			return;
		}
		var html = document.querySelector("html");

		function next() {
			var nextButton = document.querySelector(".nav-chapters.next");
			if (nextButton) {
				window.location.href = nextButton.href;
			}
		}
		function prev() {
			var previousButton = document.querySelector(
				".nav-chapters.previous"
			);
			if (previousButton) {
				window.location.href = previousButton.href;
			}
		}
		switch (e.key) {
			case "ArrowRight":
				e.preventDefault();
				if (html.dir == "rtl") {
					prev();
				} else {
					next();
				}
				break;
			case "ArrowLeft":
				e.preventDefault();
				if (html.dir == "rtl") {
					next();
				} else {
					prev();
				}
				break;
		}
	});
})();

(function clipboard() {
	const clipButtons = document.querySelectorAll(".clip-button");

	function hideTooltip(elem) {
		elem.firstChild.innerText = "";
		elem.className = "fa far fa-clipboard clip-button";
	}

	function showTooltip(elem, msg) {
		elem.firstChild.innerText = msg;
		elem.className = "fa far fa-clipboard tooltipped";
	}

	const clipboardSnippets = new ClipboardJS(".clip-button", {
		text: (trigger) => {
			hideTooltip(trigger);
			const playground = trigger.closest("pre");
			return playground.querySelector("code").textContent;
		},
	});

	clipButtons.forEach((clipButton) => {
		clipButton.addEventListener("mouseout", (e) => {
			hideTooltip(e.currentTarget);
		});
	});

	clipboardSnippets.on("success", (e) => {
		e.clearSelection();
		showTooltip(e.trigger, "Copied!");
	});

	clipboardSnippets.on("error", (e) => {
		showTooltip(e.trigger, "Clipboard error!");
	});
})();

(function wrap() {
  const wrapButtons = document.querySelectorAll(".wrap-button");
  wrapButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const playground = button.closest("pre");
      const codeContainer = playground.querySelector(".code-container");
      const codeContent = playground.querySelector(".code-content");
      const codeLines = playground.querySelectorAll(".code-line");
      
      codeContainer.classList.toggle("wrap-enabled");
      
      if (codeContent.style.whiteSpace == "pre-wrap") {
        codeContent.style.whiteSpace = "pre";
        codeLines.forEach(line => {
          line.style.whiteSpace = "pre";
        });
      } else {
        codeContent.style.whiteSpace = "pre-wrap";
        codeLines.forEach(line => {
          line.style.whiteSpace = "pre-wrap";
          line.style.wordWrap = "break-word";
          line.style.wordBreak = "break-word";
        });
      }
    });
  });
})();

(function syntax() {
	const syntaxButtons = document.querySelectorAll(".syntax-button");
	syntaxButtons.forEach((hgButton) => {
		hgButton.addEventListener("click", (e) => {
			const playground = hgButton.closest("pre");
			const codeBlock = playground.querySelector("code");
			const spans = codeBlock.querySelectorAll("span");
			spans.forEach((span) => {
				span.classList.toggle("nostyle");
			});
		});
	});
})();

(function scrollToTop() {
	const menuTitle = document.querySelector(".menu-title");

	menuTitle.addEventListener("click", () => {
		document.scrollingElement.scrollTo({ top: 0, behavior: "smooth" });
	});
})();

// Make entire category headers clickable to expand/collapse
(function expandableChapters() {
	const observer = new MutationObserver(function(mutations, obs) {
		const sidebar = document.querySelector('.sidebar-scrollbox');
		if (sidebar && sidebar.children.length > 0) {
			setupExpandableChapters();
			obs.disconnect();
		}
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true
	});

	setupExpandableChapters();

	function setupExpandableChapters() {
		const toggleButtons = document.querySelectorAll('.chapter li > a.toggle');

		toggleButtons.forEach(function(toggle) {
			const parentLi = toggle.parentElement;

			if (!parentLi.dataset.expandSetup) {
				parentLi.dataset.expandSetup = 'true';

				parentLi.addEventListener('click', function(e) {
					const clickedLink = e.target.closest('a:not(.toggle)');
					if (clickedLink) {
						const href = clickedLink.getAttribute('href');
						if (href && href !== '#' && !href.endsWith('#')) {
							return;
						}
					}

					e.preventDefault();
					e.stopPropagation();
					parentLi.classList.toggle('expanded');
				});
			}
		});
	}
})();

(function autoHideMenu() {
	var menu = document.getElementById("menu-bar");

	var previousScrollTop = document.scrollingElement.scrollTop;

	document.addEventListener(
		"scroll",
		() => {
			if (
				menu.classList.contains("folded") &&
				document.scrollingElement.scrollTop < previousScrollTop
			) {
				menu.classList.remove("folded");
			} else if (
				!menu.classList.contains("folded") &&
				document.scrollingElement.scrollTop > previousScrollTop
			) {
				menu.classList.add("folded");
			}

			if (
				!menu.classList.contains("bordered") &&
				document.scrollingElement.scrollTop > 0
			) {
				menu.classList.add("bordered");
			}

			if (
				menu.classList.contains("bordered") &&
				document.scrollingElement.scrollTop === 0
			) {
				menu.classList.remove("bordered");
			}

			previousScrollTop = Math.max(
				document.scrollingElement.scrollTop,
				0
			);
		},
		{ passive: true }
	);
})();



