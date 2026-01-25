const scheme = {
	defaultTextHighlight: {
		color: 4288341353,
		style: 0,
	},
	fallbackHighlight: {
		color: 4285791231,
		style: 0,
	},
	bracketHighlight: {
		color: 4294921292,
		style: 1,
	},
	semicolonHighlight: {
		color: 4294920266,
		style: 1,
	},
	functionsHighlights: {
		$nomention: {
			color: 4294932473,
			style: 0,
		},
		$catch: {
			color: 4288905212,
			style: 0,
		},
		$else: {
			color: 4288905212,
			style: 0,
		},
		$elseif: {
			color: 4288905212,
			style: 0,
		},
		$endif: {
			color: 4288905212,
			style: 0,
		},
		$endtry: {
			color: 4288905212,
			style: 0,
		},
		$error: {
			color: 4288905212,
			style: 0,
		},
		$if: {
			color: 4288905212,
			style: 0,
		},
		$try: {
			color: 4288905212,
			style: 0,
		},
	},
};

function functionHighlight(func, scheme) {
	let color = (scheme.functionsHighlights[func].color & 0xffffff)
		.toString(16)
		.padStart(6, "0")
		.toUpperCase();
	let style = fontStyle(scheme.functionsHighlights[func].style);
	return `<span class="function" style="color: #${color}; ${style}">$&</span>`;
}

function styling(type, scheme) {
	if (scheme[type]) {
		let color = (scheme[type].color & 0xffffff)
			.toString(16)
			.padStart(6, "0")
			.toUpperCase();
		let style = fontStyle(scheme[type].style);
		return `<span style="color: #${color}; ${style}">$&</span>`;
	}
	return `<span>$&</span>`;
}

function fontStyle(style) {
	switch (style) {
		case 0:
			return "font-style: normal; font-weight: normal;";
		case 1:
			return "font-style: normal; font-weight: bold;";
		case 2:
			return "font-style: italic; font-weight: normal;";
		case 3:
			return "font-style: italic; font-weight: bold;";
	}
}

function escapeHtml(unsafe) {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}

function highlight(scheme) {
	const codeBlocks = document.querySelectorAll("pre code");
    
	// Check if the domain contains "javascript"
	if (window.location.href.includes("javascript")) {
		return;
	}
	
	try {
		if (localStorage.getItem("code-hg"))
			scheme = JSON.parse(localStorage.getItem("code-hg"));
	} catch {}

	codeBlocks.forEach((codeBlock) => {
		let code = escapeHtml(codeBlock.textContent);

		let keys = Object.keys(scheme.functionsHighlights || {}).sort(
			(a, b) => b.length - a.length
		);
		
		keys.forEach((key) => {
			code = code.replace(
				new RegExp(`\\${key}\\b`, "g"),
				functionHighlight(key, scheme)
			);
		});

		code = code
			.replace(/\;/g, styling("semicolonHighlight", scheme))
			.replace(/\[/g, styling("bracketHighlight", scheme))
			.replace(/\]/g, styling("bracketHighlight", scheme))
			.replace(/\$(?!catch|else|elseif|endif|endtry|error|if|try|nomention\b)[a-zA-Z]+\b/g, styling("fallbackHighlight", scheme))
			.replace(/.*/g, styling("defaultTextHighlight", scheme));

		codeBlock.innerHTML = code;
	});
}

highlight(scheme);
