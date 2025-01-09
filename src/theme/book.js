"use strict";

// Fix back button cache problem
window.onunload = function () { };

// Syntax highlighting Configuration
hljs.configure({
	tabReplace: '    ', // 4 spaces
	languages: [],      // Languages used for auto-detection
});

document.querySelectorAll('code').forEach((block) => {
	hljs.highlightBlock(block);
	block.classList.add('hljs');
});

if (window.playground_copyable) {
	document.querySelectorAll('pre code').forEach((block) => {
		const pre_block = block.parentNode;
		if (!pre_block.classList.contains('playground')) {
			let buttons = pre_block.querySelector(".buttons");
			if (!buttons) {
				buttons = document.createElement('div');
				buttons.className = 'buttons';
				pre_block.insertBefore(buttons, pre_block.firstChild);
			}

			const clipButton = document.createElement('button');
			clipButton.className = 'fa fa-regular fa-paste clip-button';
			clipButton.title = 'Copy';
			clipButton.setAttribute('aria-label', clipButton.title);
			clipButton.innerHTML = '<i class=\"tooltiptext\"></i>';

			const wrapButton = document.createElement('button');
			wrapButton.className = 'fa fa-solid fa-paragraph wrap-button';
			wrapButton.title = 'Wrap code'
			wrapButton.setAttribute('aria-label', wrapButton.title);

			const syntaxButton = document.createElement('button');
			syntaxButton.className = 'fa fa-header syntax-button';
			syntaxButton.title = 'Highlighting'
			syntaxButton.setAttribute('aria-label', syntaxButton.title);

			buttons.insertBefore(clipButton, buttons.firstChild);
			buttons.insertBefore(wrapButton, buttons.firstChild);
			buttons.insertBefore(syntaxButton, buttons.firstChild);
		}
	});
}

(function sidebar() {
	const html = document.querySelector("html");
	const sidebar = document.getElementById("sidebar");
	const sidebarScrollBox = document.getElementById("sidebar-scrollbox");
	const sidebarLinks = document.querySelectorAll('#sidebar a');
	const sidebarToggleButton = document.getElementById("sidebar-toggle");
	const sidebarResizeHandle = document.getElementById("sidebar-resize-handle");
	let firstContact = null;

	function showSidebar() {
		html.classList.remove('sidebar-hidden')
		html.classList.add('sidebar-visible');
		Array.from(sidebarLinks).forEach((link) => {
			link.setAttribute('tabIndex', 0);
		});
		sidebarToggleButton.setAttribute('aria-expanded', true);
		sidebar.setAttribute('aria-hidden', false);
		try { localStorage.setItem('mdbook-sidebar', 'visible'); } catch (e) { }
	}


	const sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');

	function toggleSection(ev) {
		ev.currentTarget.parentElement.classList.toggle('expanded');
	}

	sidebarAnchorToggles.forEach((el) => {
		el.addEventListener('click', toggleSection);
	});

	function hideSidebar() {
		html.classList.remove('sidebar-visible')
		html.classList.add('sidebar-hidden');
		sidebarLinks.forEach((link) => {
			link.setAttribute('tabIndex', -1);
		});
		sidebarToggleButton.setAttribute('aria-expanded', false);
		sidebar.setAttribute('aria-hidden', true);
		try { localStorage.setItem('mdbook-sidebar', 'hidden'); } catch (e) { }
	}

	// Toggle sidebar
	sidebarToggleButton.addEventListener('click', () => {
		if (html.classList.contains("sidebar-hidden")) {
			showSidebar();
		} else if (html.classList.contains("sidebar-visible")) {
			hideSidebar();
		} else {
			if (getComputedStyle(sidebar)['transform'] === 'none') {
				hideSidebar();
			} else {
				showSidebar();
			}
		}
	});

	// Scroll sidebar to current active section
	const activeSection = sidebar.querySelector(".active");
	if (activeSection) {
		sidebarScrollBox.scrollTop = activeSection.offsetTop;
	}
})();

(function chapterNavigation() {
	document.addEventListener('keydown', (e) => {
		if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) { return; }
		if (window.search && window.search.hasFocus()) { return; }

		switch (e.key) {
			case 'ArrowRight':
				e.preventDefault();
				var nextButton = document.querySelector('.nav-chapters.next');
				if (nextButton) {
					window.location.href = nextButton.href;
				}
				break;
			case 'ArrowLeft':
				e.preventDefault();
				var previousButton = document.querySelector('.nav-chapters.previous');
				if (previousButton) {
					window.location.href = previousButton.href;
				}
				break;
		}
	});
})();

(function clipboard() {
	const clipButtons = document.querySelectorAll('.clip-button');

	function hideTooltip(elem) {
		elem.firstChild.innerText = "";
		elem.className = 'fa far fa-clipboard clip-button';
	}

	function showTooltip(elem, msg) {
		elem.firstChild.innerText = msg;
		elem.className = 'fa far fa-clipboard tooltipped';
	}

	const clipboardSnippets = new ClipboardJS('.clip-button', {
		text: (trigger) => {
			hideTooltip(trigger);
			const playground = trigger.closest("pre");
			return playground.querySelector("code").textContent;
		}
	});

	clipButtons.forEach((clipButton) => {
		clipButton.addEventListener('mouseout', (e) => {
			hideTooltip(e.currentTarget);
		});
	});

	clipboardSnippets.on('success', (e) => {
		e.clearSelection();
		showTooltip(e.trigger, "Copied!");
	});

	clipboardSnippets.on('error', (e) => {
		showTooltip(e.trigger, "Clipboard error!");
	});
})();

(function wrap() {
	const wrapButtons = document.querySelectorAll(".wrap-button");
	wrapButtons.forEach((button) => {
		button.addEventListener('click', (e) => {
			const playground = button.closest("pre");
			const codeBlock = playground.querySelector("code");
			if (codeBlock.style.whiteSpace == 'pre-wrap') {
          			codeBlock.style.whiteSpace = 'pre';
        		} else {
          			codeBlock.style.whiteSpace = 'pre-wrap';
        		}
		});
	});
})();

(function syntax() {
    const syntaxButtons = document.querySelectorAll(".syntax-button");
    syntaxButtons.forEach((hgButton) => {
        hgButton.addEventListener('click', (e) => {
            const playground = hgButton.closest("pre");
            const codeBlock = playground.querySelector("code");
            const spans = codeBlock.querySelectorAll("span"); 
            spans.forEach((span) => {
                span.classList.toggle('nostyle');
            });
        });
    });
})();

(function scrollToTop() {
	const menuTitle = document.querySelector('.menu-title');

	menuTitle.addEventListener('click', () => {
		document.scrollingElement.scrollTo({ top: 0, behavior: 'smooth' });
	});
})();

(function autoHideMenu() {
	var menu = document.getElementById('menu-bar');

	var previousScrollTop = document.scrollingElement.scrollTop;

	document.addEventListener('scroll', () => {
		if (menu.classList.contains('folded') && document.scrollingElement.scrollTop < previousScrollTop) {
			menu.classList.remove('folded');
		} else if (!menu.classList.contains('folded') && document.scrollingElement.scrollTop > previousScrollTop) {
			menu.classList.add('folded');
		}

		if (!menu.classList.contains('bordered') && document.scrollingElement.scrollTop > 0) {
			menu.classList.add('bordered');
		}

		if (menu.classList.contains('bordered') && document.scrollingElement.scrollTop === 0) {
			menu.classList.remove('bordered');
		}

		previousScrollTop = Math.max(document.scrollingElement.scrollTop, 0);
	}, { passive: true });
})();
