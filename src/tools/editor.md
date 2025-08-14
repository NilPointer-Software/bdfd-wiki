# Text Editor 
Here you can use the basic editor features to write codes more conveniently.

<style>
	textarea {
		width: 100%;
		height: 100px;
	    border-radius: 10px;
		margin-bottom: 10px;
	}

	input {
		width: 100%;
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
