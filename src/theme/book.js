"use strict";

// Fix back button cache problem
window.onunload = function() { };

// Syntax highlighting Configuration
hljs.configure({
	tabReplace: '    ', // 4 spaces
	languages: [],      // Languages used for auto-detection
});

Array.from(document.querySelectorAll('code')).forEach(function(block) {
	hljs.highlightBlock(block);
	block.classList.add('hljs');
});

if (window.playground_copyable) {
	Array.from(document.querySelectorAll('pre code')).forEach(function(block) {
		var pre_block = block.parentNode;
		if (!pre_block.classList.contains('playground')) {
			var buttons = pre_block.querySelector(".buttons");
			if (!buttons) {
				buttons = document.createElement('div');
				buttons.className = 'buttons';
				pre_block.insertBefore(buttons, pre_block.firstChild);
			}

			var clipButton = document.createElement('button');
			clipButton.className = 'fa fa-copy clip-button';
			clipButton.title = 'Copy to clipboard';
			clipButton.setAttribute('aria-label', clipButton.title);
			clipButton.innerHTML = '<i class=\"tooltiptext\"></i>';

			buttons.insertBefore(clipButton, buttons.firstChild);
		}
	});
}

(function themes() {
	var html = document.querySelector('html');
	var themeToggleButton = document.getElementById('theme-toggle');
	var themePopup = document.getElementById('theme-list');
	var themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
	var stylesheets = {
		ayuHighlight: document.querySelector("[href$='ayu-highlight.css']"),
		tomorrowNight: document.querySelector("[href$='tomorrow-night.css']"),
		highlight: document.querySelector("[href$='highlight.css']"),
	};

	function showThemes() {
		themePopup.style.display = 'block';
		themeToggleButton.setAttribute('aria-expanded', true);
		themePopup.querySelector("button#" + document.body.className).focus();
	}

	function hideThemes() {
		themePopup.style.display = 'none';
		themeToggleButton.setAttribute('aria-expanded', false);
		themeToggleButton.focus();
	}

	function set_theme(theme, store = true) {
		let ace_theme;

		if (theme == 'coal' || theme == 'navy' || theme == 'bdfd' || theme == "green" || theme == "ios" || theme == "shiro" || theme == "gluo" || theme == "kneon" || theme == "terminal") {
			stylesheets.ayuHighlight.disabled = true;
			stylesheets.tomorrowNight.disabled = false;
			stylesheets.highlight.disabled = true;
			ace_theme = "ace/theme/tomorrow_night";
		} else if (theme == 'ayu') {
			stylesheets.ayuHighlight.disabled = false;
			stylesheets.tomorrowNight.disabled = true;
			stylesheets.highlight.disabled = true;
			ace_theme = "ace/theme/tomorrow_night";
		} else {
			stylesheets.ayuHighlight.disabled = true;
			stylesheets.tomorrowNight.disabled = true;
			stylesheets.highlight.disabled = false;
			ace_theme = "ace/theme/dawn";
		}

		const menuBar = document.getElementById("menu-bar-sticky-container");
		const sideBarToggle = document.getElementById("sidebar-toggle");
		const themeToggle = document.getElementById("theme-toggle");
		const searchToggle = document.getElementById("search-toggle");
		const printToggle = document.getElementById("print-button");
		const githubLink = document.getElementById("git-repository-button");
		const gitEdit = document.getElementById("git-edit-button");

		if (theme == 'bdfd') {
			menuBar.style.backgroundColor = '#673ab7';
			menuBar.style.color = '#fff';
			sideBarToggle.style.color = '#fff';
			themeToggle.style.color = '#fff';
			searchToggle.style.color = '#fff';
			printToggle.style.color = '#fff';
			githubLink.style.color = '#fff';
			gitEdit.style.color = '#fff';
		} else {
			menuBar.style.backgroundColor = '';
			menuBar.style.color = '';
			sideBarToggle.style.color = '';
			themeToggle.style.color = '';
			searchToggle.style.color = '';
			printToggle.style.color = '';
			githubLink.style.color = '';
			gitEdit.style.color = '';
		}

		setTimeout(function() {
			themeColorMetaTag.content = getComputedStyle(document.body).backgroundColor;
		}, 1);

		if (window.ace && window.editors) {
			window.editors.forEach(function(editor) {
				editor.setTheme(ace_theme);
			});
		}

		var previousTheme;
		try { previousTheme = localStorage.getItem('mdbook-theme'); } catch (e) { }
		if (previousTheme === null || previousTheme === undefined) { previousTheme = default_theme; }

		if (store) {
			try { localStorage.setItem('mdbook-theme', theme); } catch (e) { }
		}

		html.classList.remove(previousTheme);
		html.classList.add(theme);
	}

	// Set theme
	var theme;
	try { theme = localStorage.getItem('mdbook-theme'); } catch (e) { }
	if (theme === null || theme === undefined) { theme = default_theme; }

	set_theme(theme, false);

	themeToggleButton.addEventListener('click', function() {
		if (themePopup.style.display === 'block') {
			hideThemes();
		} else {
			showThemes();
		}
	});

	themePopup.addEventListener('click', function(e) {
		var theme = e.target.id || e.target.parentElement.id;
		set_theme(theme);
	});

	themePopup.addEventListener('focusout', function(e) {
		// e.relatedTarget is null in Safari and Firefox on macOS (see workaround below)
		if (!!e.relatedTarget && !themeToggleButton.contains(e.relatedTarget) && !themePopup.contains(e.relatedTarget)) {
			hideThemes();
		}
	});

	// Should not be needed, but it works around an issue on macOS & iOS: https://github.com/rust-lang/mdBook/issues/628
	document.addEventListener('click', function(e) {
		if (themePopup.style.display === 'block' && !themeToggleButton.contains(e.target) && !themePopup.contains(e.target)) {
			hideThemes();
		}
	});

	document.addEventListener('keydown', function(e) {
		if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) { return; }
		if (!themePopup.contains(e.target)) { return; }

		switch (e.key) {
			case 'Escape':
				e.preventDefault();
				hideThemes();
				break;
			case 'ArrowUp':
				e.preventDefault();
				var li = document.activeElement.parentElement;
				if (li && li.previousElementSibling) {
					li.previousElementSibling.querySelector('button').focus();
				}
				break;
			case 'ArrowDown':
				e.preventDefault();
				var li = document.activeElement.parentElement;
				if (li && li.nextElementSibling) {
					li.nextElementSibling.querySelector('button').focus();
				}
				break;
			case 'Home':
				e.preventDefault();
				themePopup.querySelector('li:first-child button').focus();
				break;
			case 'End':
				e.preventDefault();
				themePopup.querySelector('li:last-child button').focus();
				break;
		}
	});
})();

(function sidebar() {
	var html = document.querySelector("html");
	var sidebar = document.getElementById("sidebar");
	var sidebarScrollBox = document.getElementById("sidebar-scrollbox");
	var sidebarLinks = document.querySelectorAll('#sidebar a');
	var sidebarToggleButton = document.getElementById("sidebar-toggle");
	var sidebarResizeHandle = document.getElementById("sidebar-resize-handle");
	var firstContact = null;

	function showSidebar() {
		html.classList.remove('sidebar-hidden')
		html.classList.add('sidebar-visible');
		Array.from(sidebarLinks).forEach(function(link) {
			link.setAttribute('tabIndex', 0);
		});
		sidebarToggleButton.setAttribute('aria-expanded', true);
		sidebar.setAttribute('aria-hidden', false);
		try { localStorage.setItem('mdbook-sidebar', 'visible'); } catch (e) { }
	}


	var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');

	function toggleSection(ev) {
		ev.currentTarget.parentElement.classList.toggle('expanded');
	}

	Array.from(sidebarAnchorToggles).forEach(function(el) {
		el.addEventListener('click', toggleSection);
	});

	function hideSidebar() {
		html.classList.remove('sidebar-visible')
		html.classList.add('sidebar-hidden');
		Array.from(sidebarLinks).forEach(function(link) {
			link.setAttribute('tabIndex', -1);
		});
		sidebarToggleButton.setAttribute('aria-expanded', false);
		sidebar.setAttribute('aria-hidden', true);
		try { localStorage.setItem('mdbook-sidebar', 'hidden'); } catch (e) { }
	}

	// Toggle sidebar
	sidebarToggleButton.addEventListener('click', function sidebarToggle() {
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

	sidebarResizeHandle.addEventListener('mousedown', initResize, false);

	function initResize(e) {
		window.addEventListener('mousemove', resize, false);
		window.addEventListener('mouseup', stopResize, false);
		html.classList.add('sidebar-resizing');
	}
	function resize(e) {
		document.documentElement.style.setProperty('--sidebar-width', (e.clientX - sidebar.offsetLeft) + 'px');
	}
	//on mouseup remove windows functions mousemove & mouseup
	function stopResize(e) {
		html.classList.remove('sidebar-resizing');
		window.removeEventListener('mousemove', resize, false);
		window.removeEventListener('mouseup', stopResize, false);
	}

	document.addEventListener('touchstart', function(e) {
		firstContact = {
			x: e.touches[0].clientX,
			time: Date.now()
		};
	}, { passive: true });

	document.addEventListener('touchmove', function(e) {
		if (!firstContact)
			return;

		var curX = e.touches[0].clientX;
		var xDiff = curX - firstContact.x,
			tDiff = Date.now() - firstContact.time;

		if (tDiff < 250 && Math.abs(xDiff) >= 150) {
			if (xDiff >= 0 && firstContact.x < Math.min(document.body.clientWidth * 0.25, 300))
				showSidebar();
			else if (xDiff < 0 && curX < 300)
				hideSidebar();

			firstContact = null;
		}
	}, { passive: true });

	// Scroll sidebar to current active section
	var activeSection = sidebar.querySelector(".active");
	if (activeSection) {
		sidebarScrollBox.scrollTop = activeSection.offsetTop;
	}
})();

(function chapterNavigation() {
	document.addEventListener('keydown', function(e) {
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
	var clipButtons = document.querySelectorAll('.clip-button');

	function hideTooltip(elem) {
		elem.firstChild.innerText = "";
		elem.className = 'fa fa-copy clip-button';
	}

	function showTooltip(elem, msg) {
		elem.firstChild.innerText = msg;
		elem.className = 'fa fa-copy tooltipped';
	}

	var clipboardSnippets = new ClipboardJS('.clip-button', {
		text: function(trigger) {
			hideTooltip(trigger);
			let playground = trigger.closest("pre");
			return playground.querySelector("code").textContent;
		}
	});

	Array.from(clipButtons).forEach(function(clipButton) {
		clipButton.addEventListener('mouseout', function(e) {
			hideTooltip(e.currentTarget);
		});
	});

	clipboardSnippets.on('success', function(e) {
		e.clearSelection();
		showTooltip(e.trigger, "Copied!");
	});

	clipboardSnippets.on('error', function(e) {
		showTooltip(e.trigger, "Clipboard error!");
	});
})();

(function scrollToTop() {
	var menuTitle = document.querySelector('.menu-title');

	menuTitle.addEventListener('click', function() {
		document.scrollingElement.scrollTo({ top: 0, behavior: 'smooth' });
	});
})();

(function autoHideMenu() {
	var menu = document.getElementById('menu-bar');

	var previousScrollTop = document.scrollingElement.scrollTop;

	document.addEventListener('scroll', function() {
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
