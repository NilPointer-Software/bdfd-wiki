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

function functionHighlight(func, scheme, match) {
	let color = (scheme.functionsHighlights[func].color & 0xffffff)
		.toString(16)
		.padStart(6, "0")
		.toUpperCase();
	let style = fontStyle(scheme.functionsHighlights[func].style);
	return `<span class="function" style="color: #${color}; ${style}">${match}</span>`;
}

function createStyledSpan(color, style, content) {
	return `<span style="color: #${color}; ${style}">${content}</span>`;
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

function getColorFromScheme(type, scheme) {
	if (scheme[type]) {
		return (scheme[type].color & 0xffffff)
			.toString(16)
			.padStart(6, "0")
			.toUpperCase();
	}
	return "FFFFFF";
}

function getStyleFromScheme(type, scheme) {
	if (scheme[type]) {
		return fontStyle(scheme[type].style);
	}
	return fontStyle(0);
}

function highlight(scheme) {
	const codeBlocks = document.querySelectorAll("pre code");
    
	if (window.location.href.includes("javascript")) {
		return;
	}
	
	try {
		if (localStorage.getItem("code-hg"))
			scheme = JSON.parse(localStorage.getItem("code-hg"));
	} catch {}

	codeBlocks.forEach((codeBlock) => {
		const container = document.createElement('div');
		container.className = 'code-container';
		
		const lineNumbers = document.createElement('div');
		lineNumbers.className = 'line-numbers';
		
		const codeContent = document.createElement('div');
		codeContent.className = 'code-content';
		
		let originalCode = codeBlock.textContent;
		const lines = originalCode.split('\n');
		
		let lineNumbersHTML = '';
		let codeLinesHTML = '';
		
		for (let i = 0; i < lines.length; i++) {
			const lineNumber = i + 1;
			lineNumbersHTML += `<div class="line-number" data-line-number="${lineNumber}">${lineNumber}</div>`;
			
			let line = escapeHtml(lines[i]);
			
			// Process specific functions first
			let keys = Object.keys(scheme.functionsHighlights || {}).sort(
				(a, b) => b.length - a.length
			);
			
			keys.forEach((key) => {
				const regex = new RegExp(`\\${key}\\b`, "g");
				line = line.replace(regex, (match) => {
					return functionHighlight(key, scheme, match);
				});
			});

			// Process other patterns
			// Semicolons
			line = line.replace(/;/g, (match) => {
				return createStyledSpan(
					getColorFromScheme("semicolonHighlight", scheme),
					getStyleFromScheme("semicolonHighlight", scheme),
					match
				);
			});
			
			// Brackets
			line = line.replace(/\[/g, (match) => {
				return createStyledSpan(
					getColorFromScheme("bracketHighlight", scheme),
					getStyleFromScheme("bracketHighlight", scheme),
					match
				);
			});
			
			line = line.replace(/\]/g, (match) => {
				return createStyledSpan(
					getColorFromScheme("bracketHighlight", scheme),
					getStyleFromScheme("bracketHighlight", scheme),
					match
				);
			});
			
			// Remaining functions not processed earlier
			line = line.replace(/\$(?!catch|else|elseif|endif|endtry|error|if|try|nomention\b)[a-zA-Z]+\b/g, (match) => {
				return createStyledSpan(
					getColorFromScheme("fallbackHighlight", scheme),
					getStyleFromScheme("fallbackHighlight", scheme),
					match
				);
			});
			
			// Apply default text highlight to the entire line
			// If line is empty, keep it empty
			if (line.trim() === '' && line.length === 0) {
				codeLinesHTML += `<div class="code-line">&nbsp;</div>`;
			} else {
				const defaultColor = getColorFromScheme("defaultTextHighlight", scheme);
				const defaultStyle = getStyleFromScheme("defaultTextHighlight", scheme);
				codeLinesHTML += `<div class="code-line" style="color: #${defaultColor}; ${defaultStyle}">${line}</div>`;
			}
		}
		
		lineNumbers.innerHTML = lineNumbersHTML;
		codeContent.innerHTML = codeLinesHTML;
		
		container.appendChild(lineNumbers);
		container.appendChild(codeContent);
		
		codeBlock.innerHTML = '';
		codeBlock.appendChild(container);
	});
}

highlight(scheme);