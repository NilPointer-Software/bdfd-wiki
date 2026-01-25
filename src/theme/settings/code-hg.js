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
		// Split by newline and remove empty lines at the end
		let lines = originalCode.split('\n');
		
		// Remove trailing empty lines
		while (lines.length > 0 && lines[lines.length - 1].trim() === '') {
			lines.pop();
		}
		
		// If no lines left after removing empty ones, add one empty line
		if (lines.length === 0) {
			lines = [''];
		}
		
		let lineNumbersHTML = '';
		let codeLinesHTML = '';
		
		// Get colors and styles for all scheme types
		const defaultColor = getColorFromScheme("defaultTextHighlight", scheme);
		const defaultStyle = getStyleFromScheme("defaultTextHighlight", scheme);
		const bracketColor = getColorFromScheme("bracketHighlight", scheme);
		const bracketStyle = getStyleFromScheme("bracketHighlight", scheme);
		const semicolonColor = getColorFromScheme("semicolonHighlight", scheme);
		const semicolonStyle = getStyleFromScheme("semicolonHighlight", scheme);
		const fallbackColor = getColorFromScheme("fallbackHighlight", scheme);
		const fallbackStyle = getStyleFromScheme("fallbackHighlight", scheme);
		
		// Prepare function highlights
		const functionHighlights = {};
		let keys = Object.keys(scheme.functionsHighlights || {}).sort(
			(a, b) => b.length - a.length
		);
		
		keys.forEach((key) => {
			let color = (scheme.functionsHighlights[key].color & 0xffffff)
				.toString(16)
				.padStart(6, "0")
				.toUpperCase();
			let style = fontStyle(scheme.functionsHighlights[key].style);
			functionHighlights[key] = { color, style };
		});
		
		for (let i = 0; i < lines.length; i++) {
			const lineNumber = i + 1;
			lineNumbersHTML += `<div class="line-number" data-line-number="${lineNumber}">${lineNumber}</div>`;
			
			let line = lines[i];
			
			// Escape HTML first (for plain text parts)
			line = escapeHtml(line);
			
			// Process specific functions first
			keys.forEach((key) => {
				const regex = new RegExp(`(${key.replace(/\$/g, '\\$')})(?!\\w)`, 'g');
				line = line.replace(regex, (match) => {
					const funcData = functionHighlights[key];
					return `<span class="function" style="color: #${funcData.color}; ${funcData.style}">${match}</span>`;
				});
			});
			
			// Process other elements
			// Brackets
			line = line.replace(/\[/g, () => {
				return `<span style="color: #${bracketColor}; ${bracketStyle}">[</span>`;
			});
			
			line = line.replace(/\]/g, () => {
				return `<span style="color: #${bracketColor}; ${bracketStyle}">]</span>`;
			});
			
			// Semicolons
			line = line.replace(/;/g, () => {
				return `<span style="color: #${semicolonColor}; ${semicolonStyle}">;</span>`;
			});
			
			// Remaining functions (not in functionsHighlights)
			// Create pattern to match $function names
			const remainingFuncPattern = /\$[a-zA-Z]+\b/g;
			line = line.replace(remainingFuncPattern, (match) => {
				// Skip if already inside a span (already processed)
				if (line.indexOf(`<span`) !== -1) {
					// Check if this exact match is already wrapped
					const pos = line.indexOf(match);
					const before = line.substring(0, pos);
					const after = line.substring(pos + match.length);
					
					// Check if match is inside any span
					const spansBefore = (before.match(/<span/g) || []).length;
					const spansClosedBefore = (before.match(/<\/span>/g) || []).length;
					
					// If we're inside a span, don't wrap again
					if (spansBefore > spansClosedBefore) {
						return match;
					}
				}
				
				// Check if this is a known function (already processed)
				let isKnown = false;
				keys.forEach((key) => {
					if (match === key) {
						isKnown = true;
					}
				});
				
				if (!isKnown) {
					return `<span style="color: #${fallbackColor}; ${fallbackStyle}">${match}</span>`;
				}
				
				return match;
			});
			
			// Add the line to output
			if (line.trim() === '' && line.length === 0) {
				codeLinesHTML += `<div class="code-line">&nbsp;</div>`;
			} else {
				codeLinesHTML += `<div class="code-line">${line}</div>`;
			}
		}
		
		lineNumbers.innerHTML = lineNumbersHTML;
		codeContent.innerHTML = codeLinesHTML;
		
		// Apply default text color to the entire code content
		codeContent.style.color = `#${defaultColor}`;
		codeContent.style.cssText += `; ${defaultStyle}`;
		
		container.appendChild(lineNumbers);
		container.appendChild(codeContent);
		
		codeBlock.innerHTML = '';
		codeBlock.appendChild(container);
	});
}

highlight(scheme);