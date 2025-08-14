# Text Editor 
Here you can use the basic editor features to write codes more conveniently.
 
<div id="stats-container">
	<p>Words: <span id="wordCount">0</span></p>
	<p>Spaces: <span id="spaceCount">0</span></p>
    <p>Lines: <span id="lineCount">0</span></p>
    <p>Characters: <span id="charCount">0</span></p>
</div>
<p id="error-message"></p>
<textarea id="editor" oninput="updateStats(); checkBrackets()"></textarea><br>
<div id="text-editorui">
	<label for="searchText">Find:</label>
	<input type="text" id="searchText"><br>
	<label for="replaceText">Replcae with:</label>
	<input type="text" id="replaceText"><br>
	<button onclick="replaceText()">Replcae all</button>
	<button id="highlightButton" onclick="toggleHighlight()">Highlighting found</button><br>
</div>

<p>[: <span id="openCount">0</span> | ]: <span id="openCount">0</span><p>
<div id="highlightedText"></div>
