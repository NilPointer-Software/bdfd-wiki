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
		
		// Prepare colors
		const defaultColor = (scheme.defaultTextHighlight.color & 0xffffff).toString(16).padStart(6, "0").toUpperCase();
		const bracketColor = (scheme.bracketHighlight.color & 0xffffff).toString(16).padStart(6, "0").toUpperCase();
		const semicolonColor = (scheme.semicolonHighlight.color & 0xffffff).toString(16).padStart(6, "0").toUpperCase();
		const fallbackColor = (scheme.fallbackHighlight.color & 0xffffff).toString(16).padStart(6, "0").toUpperCase();
		
		// Prepare styles
		const defaultStyle = scheme.defaultTextHighlight.style;
		const bracketStyle = scheme.bracketHighlight.style;
		const semicolonStyle = scheme.semicolonHighlight.style;
		const fallbackStyle = scheme.fallbackHighlight.style;
		
		// Prepare function styles
		const functionStyles = {};
		Object.keys(scheme.functionsHighlights).forEach(key => {
			functionStyles[key] = {
				color: (scheme.functionsHighlights[key].color & 0xffffff).toString(16).padStart(6, "0").toUpperCase(),
				style: scheme.functionsHighlights[key].style
			};
		});
		
		// Function to get style string
		function getStyleString(styleNum) {
			switch (styleNum) {
				case 0: return "font-style: normal; font-weight: normal;";
				case 1: return "font-style: normal; font-weight: bold;";
				case 2: return "font-style: italic; font-weight: normal;";
				case 3: return "font-style: italic; font-weight: bold;";
				default: return "font-style: normal; font-weight: normal;";
			}
		}
		
		for (let i = 0; i < lines.length; i++) {
			const lineNumber = i + 1;
			lineNumbersHTML += `<div class="line-number" data-line-number="${lineNumber}">${lineNumber}</div>`;
			
			let line = lines[i];
			let resultLine = '';
			let currentPos = 0;
			
			// Escape HTML in the line
			line = line.replace(/&/g, "&amp;")
			           .replace(/</g, "&lt;")
			           .replace(/>/g, "&gt;")
			           .replace(/"/g, "&quot;");
			
			// Find all special tokens in the line
			const tokens = [];
			
			// Find functions from functionsHighlights
			Object.keys(functionStyles).forEach(func => {
				const regex = new RegExp(func.replace(/\$/g, '\\$'), 'g');
				let match;
				while ((match = regex.exec(line)) !== null) {
					tokens.push({
						start: match.index,
						end: match.index + func.length,
						type: 'function',
						value: func,
						content: match[0]
					});
				}
			});
			
			// Find brackets
			['[', ']'].forEach(bracket => {
				let pos = -1;
				while ((pos = line.indexOf(bracket, pos + 1)) !== -1) {
					tokens.push({
						start: pos,
						end: pos + 1,
						type: 'bracket',
						value: bracket,
						content: bracket
					});
				}
			});
			
			// Find semicolons
			let semicolonPos = -1;
			while ((semicolonPos = line.indexOf(';', semicolonPos + 1)) !== -1) {
				tokens.push({
					start: semicolonPos,
					end: semicolonPos + 1,
					type: 'semicolon',
					value: ';',
					content: ';'
				});
			}
			
			// Find other $functions (fallback)
			const funcRegex = /\$[a-zA-Z]+\b/g;
			let funcMatch;
			while ((funcMatch = funcRegex.exec(line)) !== null) {
				// Check if this function is already in tokens
				const isAlreadyProcessed = tokens.some(token => 
					token.start === funcMatch.index && token.type === 'function'
				);
				
				if (!isAlreadyProcessed) {
					tokens.push({
						start: funcMatch.index,
						end: funcMatch.index + funcMatch[0].length,
						type: 'fallback',
						value: funcMatch[0],
						content: funcMatch[0]
					});
				}
			}
			
			// Sort tokens by position
			tokens.sort((a, b) => a.start - b.start);
			
			// Build the line with styled tokens
			let lastPos = 0;
			
			tokens.forEach(token => {
				// Add plain text before token
				if (token.start > lastPos) {
					resultLine += line.substring(lastPos, token.start);
				}
				
				// Add styled token
				let color, style;
				switch (token.type) {
					case 'function':
						color = functionStyles[token.value].color;
						style = getStyleString(functionStyles[token.value].style);
						break;
					case 'bracket':
						color = bracketColor;
						style = getStyleString(bracketStyle);
						break;
					case 'semicolon':
						color = semicolonColor;
						style = getStyleString(semicolonStyle);
						break;
					case 'fallback':
						color = fallbackColor;
						style = getStyleString(fallbackStyle);
						break;
				}
				
				resultLine += `<span style="color: #${color}; ${style}">${token.content}</span>`;
				lastPos = token.end;
			});
			
			// Add remaining plain text
			if (lastPos < line.length) {
				resultLine += line.substring(lastPos);
			}
			
			// Add the line to output
			if (line.trim() === '' && line.length === 0) {
				codeLinesHTML += `<div class="code-line">&nbsp;</div>`;
			} else {
				codeLinesHTML += `<div class="code-line" style="color: #${defaultColor}; ${getStyleString(defaultStyle)}">${resultLine}</div>`;
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