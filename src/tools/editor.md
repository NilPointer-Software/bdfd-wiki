# Text Editor
Here you can use the basic editor features to write codes more conveniently.

<style>
.editPage {
	visibility: hidden;
}
</style>

<div id="stats-container">
	<p>Words: <span id="wordCount">0</span></p>
	<p>Spaces: <span id="spaceCount">0</span></p>
    <p>Lines: <span id="lineCount">0</span></p>
    <p>Characters: <span id="charCount">0</span></p>
	<p>Bytes: <span id="byteCount">0</span></p>
</div>

<div id="command-editor">
	<p id="scriptType">Name</p>
	<div id="nameScript">
		<textarea id="name" oninput="nameScript(); typeScript()"></textarea>
		<span>0/50</span>
	</div>
	<div id="selectors">
  		<select name="type" onchange="typeScript()">
			<option selected value="auto">Auto</option>
			<option value="command">Command</option>
			<option value="slash">Slash Command</option>
			<option value="callback">Callback</option>
		</select>
		<select name="language" onchange="bdscript2()">
			<option selected value="bds2">BDScript 2</option>
			<option value="bds">BDScript</option>
			<option value="bdsu">BDScript Unstable</option>
		</select>
	</div>
	<p id="error-message"></p>
	<p id="autocomplete"></p>
	<div class="scriptdiv">
		<textarea id="editor" oninput="updateStats(); checkBrackets(); bdscript2()"></textarea><br>
	 	<button class="fa fa-regular fa-paste clip-button" onclick="copyCodeText() title="Copy" aria-label="Copy"></button>
	  	<button class="fa fa-file-word-o" onclick="saveFile()" title="Save as file" aria-label="Save as file"></button>
	</div>
</div>

<div id="another-info">
  <p>[<span id="openCount">0</span></p>
  <p>]<span id="closeCount">0</span></p>
		<p>Escaped Characters: <span id="escapesCount">0</span></p>
		<p>Special Characters: <span id="specialChars">0</span></p>
</div>

<div id="text-editorui">
	<label for="searchText">Find:</label>
	<input type="text" id="searchText"><br>
	<label for="replaceText">Replace:</label>
	<input type="text" id="replaceText"><br>
	<button onclick="replaceText()">Replace all</button>
	<button id="highlightButton" onclick="toggleHighlight()">Find</button><br>
	<p><i class="fa fa-info" aria-hidden="true"></i> Regex is supported</p>
</div>

<div id="highlightedText"></div>

<details id="settings">
  <summary>Settings</summary>
  <div class="setting-item">
    <p>Toggles the visibility of the editor's useful buttons panel (save as file, copy text).</p>
    <button onclick="editorAreaButtons()" id="usefulButtonsButton">Useful buttons</button>
  </div>
  <hr>
  <div class="setting-item">
    <p>Toggles case sensitivity for the find function in the editor.</p>
    <button onclick="editorFindCase()" id="caseSensitiveButton">Sensitive case</button>
  </div>
  <hr>
  <div class="setting-item">
    <p>Disables all links on the page to avoid misclicking.</p>
    <button onclick="editorBrokeLinks()" id="brokeLinksButton">Break all links</button>
  </div>
  <hr>
  <div class="setting-item">
    <p>Displaying warnings.</p>
    <button onclick="editorWarning()" id="changeWarningsButton">Warnings</button>
  </div>
  <hr>
  <div class="setting-item">
    <p>Displaying errors.</p>
    <button onclick="editorError()" id="changeErrorsButton">Errors</button>
  </div>
  <hr>
  <div class="setting-item">
    <p>Text wrapping in text editor.</p>
    <button onclick="editorWrapping()" id="textWrappingButton">Text Wrapping</button>
  </div>
  <hr>
  <div class="setting-item">
    <p>Highlighting in  text editor.</p>
    <button onclick="textHighlighting()" id="findHighlightingButton">Highlighting</button>
  </div>
  <hr>
  <div class="setting-item">
    <p>Suggest functions as you type.</p>
    <button onclick="changeAutocomplete()" id="changeAutocompleteButton">Autocomplete</button>
  </div>
  <div class="setting-item">
    <p id="internetConnection">Loading...</p>
  </div>
</details>

<div id="tips">
	<h2>Tips</h2>
	<p>**</p>
	<p>*</p>
	<p>`</p>
	<p>~~</p>
</div>
