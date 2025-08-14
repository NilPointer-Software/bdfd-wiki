# Text Editor 
Here you can use the basic editor features to write codes more conveniently.

<head>
	<style>

		textarea {
			width: 100%;
			height: 100px;
	    border-radius: 10px;
			margin-bottom: 10px;
		}

		input {
			width: 100%;
      border-radius: 10px;
			margin-bottom: 10px;
		}

		.highlight {
			background-color: yellow;
		}

		#highlightedText {
			white-space: pre-wrap;
			word-break: break-word;
		}

		#error-message {
			color: red;
		}

		#stats-container {
			position: fixed;
			top: 0;
			left: 0;
			background-color: white;
			padding: 10px;
			border-bottom: 1px solid #ccc;
			z-index: 100;
		}

		body {
			padding-top: 60px;
		}
	</style>
</head>

	<div id="stats-container">
		<p>Words: <span id="wordCount">0</span> |
			Spaces: <span id="spaceCount">0</span> |
			Lines: <span id="lineCount">0</span> |
			Characters: <span id="charCount">0</span> 
	</div>

	<textarea id="editor" oninput="updateStats(); checkBrackets()"></textarea><br>
	<label for="searchText">Find:</label>
	<input type="text" id="searchText"><br>
	<label for="replaceText">Replcae with:</label>
	<input type="text" id="replaceText"><br>
	<button onclick="replaceText()">Replcae all</button>
	<button id="highlightButton" onclick="toggleHighlight()">Highlighting found</button><br>
	<p id="error-message"></p>
  <p>[: <span id="openCount">0</span> | ]: <span id="openCount">0</span><p>
	<div id="highlightedText"></div>

	<script>
        function updateStats() {
            const text = document.getElementById("editor").value;
            const words = text.trim().split(/\s+/).filter(word => word !== "");
            const wordCount = words.length;
            let spaceCount = 0;
            for (let i = 0; i < text.length; i++) { if (text[i] === ' ') { spaceCount++; } }
            const lineCount = text.split('\n').length;
            const charCount = text.length;

            document.getElementById("wordCount").textContent = wordCount;
            document.getElementById("spaceCount").textContent = spaceCount;
            document.getElementById("lineCount").textContent = lineCount;
            document.getElementById("charCount").textContent = charCount;
        }

        function replaceText() {
            const searchText = document.getElementById("searchText").value;
            const replaceText = document.getElementById("replaceText").value;
            const editor = document.getElementById("editor");
            editor.value = editor.value.replaceAll(searchText, replaceText);
            updateStats();
            checkBrackets();
        }

        function checkBrackets() {
            const text = document.getElementById("editor").value;
            let openBrackets = 0;
            let closeBrackets = 0;

            for (let i = 0; i < text.length; i++) {
                if (text[i] === '[') { openBrackets++; }
                else if (text[i] === ']') { closeBrackets++; }
            }

            document.getElementById("openCount").textContent = openBrackets;
            document.getElementById("closeCount").textContent = closeBrackets;
            const errorMessageElement = document.getElementById("error-message");

            if (openBrackets > closeBrackets) { errorMessageElement.textContent = "Error: Brackets are closed."; }
            else if (openBrackets < closeBrackets) { errorMessageElement.textContent = "Error: empty"; }
            else { errorMessageElement.textContent = ""; }
        }

        function toggleHighlight() {
            const button = document.getElementById("highlightButton");
            const highlightedTextDiv = document.getElementById("highlightedText");
            const text = document.getElementById("editor").value;
            const searchText = document.getElementById("searchText").value;
            let highlighted = text;
            if (button.textContent === "Highlighting found") {
                if (searchText) {
                    highlighted = highlighted.replaceAll(searchText, `<span class="highlight">${searchText}</span>`);
                }
                highlightedTextDiv.innerHTML = highlighted;
                button.textContent = "Hide";
            } else {
                highlightedTextDiv.innerHTML = "";
                button.textContent = "Highlighting found";
            }
        }
	</script>
</body>
