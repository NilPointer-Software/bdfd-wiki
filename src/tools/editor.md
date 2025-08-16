# Text Editor 12:36 last update
Here you can use the basic editor features to write codes more conveniently.
 
<div id="stats-container">
	<p>Words: <span id="wordCount">0</span></p>
	<p>Spaces: <span id="spaceCount">0</span></p>
 <p>Lines: <span id="lineCount">0</span></p>
 <p>Characters: <span id="charCount">0</span></p>
	<p>Bytes: <span id="byteCount">0</span></p>
	<button onclick="copyText()">Copy</button>
</div>
<p id="error-message"></p>
<textarea id="editor" oninput="updateStats(); checkBrackets()"></textarea><br>
<div id="text-editorui">
	<label for="searchText">Find:</label>
	<input type="text" id="searchText"><br>
	<label for="replaceText">Replace:</label>
	<input type="text" id="replaceText"><br>
	<button onclick="replaceText()">Replace all</button>
	<button id="highlightButton" onclick="toggleHighlight()">Find</button><br>
</div>

<div id="another-info">
  <p>[<span id="openCount">0</span></p>
  <p>]<span id="closeCount">0</span></p>
		<p>Escaped Characters: <span id="escapesCount">0</span></p>
</div>

<div id="highlightedText"></div>
