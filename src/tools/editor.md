# Text Editor
Here you can use the basic editor features to write codes more conveniently.

<style>
#stats-container p, #another-info p {
    transition: .4s;
    display: inline-block;
    margin-right: 7.5px;
    background-color: var(--color3);
    padding: 5px;
    font-size: 1.5rem;
    border-radius: 10px;
	margin-top:  -.5rem;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}

#stats-container span {
    font-weight: bold;
}

#stats-container p:hover, #another-info p:hover {
    transform: scale(1.1);
    border-radius: 8px;
    border-width: 1px;
    transition: .4s;
}

#stats-container, #another-info {
    margin-top: 2rem; 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

#stats-container {
	margin-bottom: 1rem;
}

#another-info  {
	margin-top: 1.25rem;
	margin-bottom: -1rem;
}

#editor, #name {
	width: 96%;
	font-size: 1.5rem;
	min-height: 1.3rem;
	max-height: 100em;
	border-radius: 10px;
	border-width: 0;
	color: #bbb;
	background: hsl(0deg 0% 100% / 7%);
	padding: 7px;
	font-size: 1.5rem;
	margin: -2rem auto;
	display: block;
	outline: none;
}

#editor {
	height: 40rem;
	resize: vertical;
}

#name {
	white-space: nowrap;
	overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
	height: 1.7rem;
	margin-bottom: 2rem;
	margin-top: -1rem;
	resize: none;
}

#scriptType {
	margin-top: -1.5rem;
}

#text-editorui {
	user-select: none;
	-webkit-user-select: none;
	margin-top: 1rem;
	margin-bottom: 1rem;
	background-color: var(--color3);
	padding: 10px;
	border-radius: 10px;
}

#text-editorui p {
	user-select: none;
	-webkit-user-select: none;
	margin-bottom: -.5rem;
	margin-top: .5rem;
	font-size: 1rem;
	color: #9e9e9e;
}

#searchText, #replaceText {
	background: hsl(0deg 0% 100% / 7%);
	color: #bbb;
	font-size: 1.5rem;
	display: block;
	outline: none;
	border-radius: 10px;
	border-width: 0;
	width: 99.5%;
	height: 3rem;
}

#text-editorui button {
	outline: none;
	touch-action: manipulation;
	-webkit-user-select: none;
	user-select: none;
	padding-left: 1rem;
	padding-right: 1rem;
	height: 4rem;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	margin-top: -1rem !important;
	font-size: 1.5rem;
	margin: 0.25%;
	color: #fff;
	background: hsl(0deg 0% 100% / 7%);
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	transition: 0.2s;
}

#text-editorui button:hover {
	transform: scale(1.05);
	border-radius: 8px;
	border-width: 1px;
	transition: 0.4s;
}

#error-message {
	margin-top: -1rem;
	margin-bottom: 3rem;
	display: flex;
	flex-direction: row;
    justify-content: center;
    align-items: center;
}

#highlightedText span {
	color: var(--color1);
}

#highlightedText a {
	color: white !important;
}

#highlightedText {
	overflow-x: auto;
	color: #bbb;
	font-size: 1.5rem;
	border-radius: 10px;
	border-width: 0;
	padding: 10px;
	height: 100%;
	word-break: break-all;
	background: hsl(0deg 0% 100% / 7%);
}

#highlightedText p {
	margin-top: -.3rem;
	margin-bottom: .5rem;
}

#highlightedText h1 {
  display: inline;
}

#highlightedText h2 {
  display: inline;
}

#highlightedText h3 {
  display: inline;
}

#highlightedText spoiler {
	user-select: none;
	-webkit-user-select: none;
	background: #111111;
	color: #111111;
	padding-left: .25rem;
	padding-right: .25rem;
	cursor: pointer !important;
}

#highlightedText spoiler.spoiler-active {
  background: #2e2e2e94;
  color: #ababab;
  cursor: text !important;
  user-select: auto;
  -webkit-user-select: auto;
}

#highlightedText quote::before {
	content: "";
	margin-right: 5px;
	border-radius: 10px;
	border-style: solid;
	border-width: 2px;
	border-color: #535353;
}

#highlightedText hgSCode {
	background: #2a2a2a;
	color: #919191;
	padding-left: .3rem;
	padding-right: .3rem;
	border-style: solid;
	border-width: 1px;
	border-color: #4b4b4b;
	border-radius: 5px;
}

.line-number {
    border-right-width: 2px;
	color: hsl(0deg 0% 100% / 30%) !important;
    border-color: hsl(0deg 0% 100% / 30%);
    border-right-style: solid;
    display: inline-block;
    width: 4.2rem;
	margin-right: 1rem;
	white-space: nowrap;
	-webkit-user-select: none;
	user-select: none;
}

.channel, .mention {
    border-radius: 5px;
    color: hsl(0deg 0% 100% / 50%) !important;
    background-color: hsl(0deg 0% 100% / 10%) !important;  
    font-weight: bold;  
    padding: 2px;
}

.timestamp {
	color: #bbb !important;
	background-color: hsl(0deg 0% 100% / 5%) !important;  
}

.hg-code {
    border-radius: 5px;
    border-width: 2px;
    border-style: solid;
    border-color: hsl(0deg 0% 100% / 10%) !important;
    color: hsl(0deg 0% 100% / 40%) !important;
    background-color: hsl(0deg 0% 100% / 5%) !important;
    padding: 1px;
    display: inline-block;
}

.close-btn {
	user-select: none;
	-webkit-user-select: none;
	outline: none;
	transition: .3s;
    color: hsl(0deg 0% 100% / 75%); ! important;
    padding: 1px 7px;
	border-color: hsl(0deg 0% 100% / 15%);
    width: 25px;
	border-radius: 60px;
	cursor: pointer;
}

.close-btn:hover {
	transition: .3s;
    background-color: hsl(0deg 0% 100% / 10%);
    border-style: solid;
	border-width: 1px;
}

.scriptdiv {
    position: relative;
}

.scriptdiv button:hover {
	color: var(--color1);
	border-color: var(--color1);
	border-radius: 9px;
	opacity: 0.9;
	transition: 0.2s;
}

.scriptdiv button {
	outline: none;
  	position: absolute;
  	top: 0.3rem;
 	user-select: none;
    -webkit-user-select: none;
	touch-action: manipulation;
 	outline: none;
 	color: #fff;
 	margin: 1.5px 5px;
	padding: 5px;
	cursor: pointer;
 	width: 3.2rem;
    height: 3.2rem;
	font-size: 1.5rem;
    border-style: solid;
    border-width: 1px;
    border-radius: 10px;
    border-color: #aeaeae;
    background: rgb(255 255 255 / 10%);
    opacity: 0.8;
    transition: 0.2s;
}

.scriptdiv button:nth-of-type(1) {
	right: 4rem;
}

.scriptdiv button:nth-of-type(2) {
  	right: 0.3rem;
}

#error-message {
    display: block !important;
	text-align: center;
}

#error-message button {
	outline: none;
	transition: .4s;
	display: inline-block;
	margin-right: 7.5px;
	background-color: var(--color3);
	padding: 1rem;
	color: hsl(0deg 0% 100% / 70%);;
	font-size: 1.5rem;
	border-radius: 10px;
	border: none;
	border-width: .1px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}

#error-message button:hover {
	transition: .4s;
	color: var(--color1);
	border-style: solid;
}

#nameScript {
    position: relative;
}

#nameScript span {
	user-select: none;
	-webkit-user-select: none;
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    color: #888;
    font-size: 0.8em;    
}

@media (max-width: 950px) {
  #nameScript span {
    top: -35%;
  }
		
		#nameScript textarea {
		  border-radius: 15px;
				font-size: 2rem;
				height: 2.75rem;
		}
}

#selectors {
  outline: none;
  user-select: none;
  -webkit-user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.5rem;
  margin-top: -1rem;
  flex-wrap: wrap;
}

#selectors select {
  cursor: pointer;
  outline: none;
  text-decoration: none;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  width: 15rem;
  padding: 8px 5px;
  background: rgb(255 255 255 / 10%);
  color: rgb(255 255 255 / 80%);
  border-radius: 10px;
  box-sizing: border-box;
  border: 0;
}

@media (max-width: 350px) {
	#selectors select {
		width: 85%;
	}
}

#selectors select option {
	outline: none;
	color: #d3d3d3;
	background-color: var(--color3);
}

#settings, #tips {
	margin-top: 1rem;
	background-color: var(--color3);
	border-radius: 10px;
	padding: 1rem;
}

#tips em, #tips strong, #tips a {
  display: block;
}

#tips h1 {
	margin-top: -2.25rem;
}

#tips h2 {
	margin-top: -1.9rem;
}

#tips h3 {
	margin-top: .1rem;
}

#tips h3:hover {
	border: 0;
}

#settings summary, #text-editorui summary, #tips summary {
	user-select: none;
	-webkit-user-select: none;
	outline: none;
	background-color: var(--color3);
	border-radius: 10px;
	cursor: pointer;
	padding: 0rem;
	padding-bottom: .75rem;
	margin-bottom: -.5rem;
	margin-top: -.1rem;
	font-size: 2.5rem;
}

.setting-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

#settings .setting-item p {
    flex: 1;
    margin-right: 10px;
    text-align: left;
    word-wrap: break-word;
    line-height: 1.4;
}

#settings .setting-item button {
	cursor: pointer;
	outline: none;
	transition: 0.2s;
    width: 15rem;
	padding: .75rem;
	border-radius: 10px;
	border: 0;
	background: linear-gradient(to right, rgb(255 255 255 / 40%), rgb(1 192 36 / 75%));
    box-sizing: border-box;
	color: rgb(255 255 255 / 90%);
}

#settings .setting-item #textWrappingButton, #settings .setting-item #brokeLinksButton, #settings .setting-item #caseSensitiveButton  {
	background: linear-gradient(to left, rgb(255 255 255 / 40%), rgb(192 1 1 / 75%));
}

@media (max-width: 475px) {
    .setting-item {
        flex-direction: column;
        align-items: flex-start;
    }

    #settings .setting-item p {
		text-align: center;
        margin-right: 0;
        margin-bottom: 0.5rem;
    }

    #settings .setting-item button {
        width: 100%;
    }
}

#settings .setting-item button:hover {
	transform: scale(1.025);
	transition: 0.2s;
	color: #fff;
}

#settings hr {
    border: 0;
    height: 1px;
    background: hsl(0deg 0% 100% / 20%);
	border-radius: 10px;
	margin: 5px 0;
}

.setting-item:last-child {
	user-select: none;
	-webkit-user-select: none;
	margin-top: -2.25rem;
    margin-bottom: -1.25rem;
    display: flex;
    justify-content: center;
	text-align: center;
	font-size: 1.3rem;
}

#autocomplete {
    white-space: normal;
    width: auto;
    margin-bottom: 3rem;
    margin-top: -1.75rem;
    display: block !important;
	border-radius: 10px;
	background: var(--color3) !important;
	border-color: hsl(0deg 0% 100% / 10%) !important;
}

#autocomplete span {
    display: block;
    color: hsl(0deg 0% 100% / 65%);
    border-radius: 10px;
    margin-bottom: .5rem;
    cursor: pointer;
    padding: .5rem;
    width: 100%;
    transition: 0.2s;
}

#autocomplete span.selected, #autocomplete span:hover {
    margin-left: .5rem;
	border-left-color: var(--color1);
	border-left-width: 2.5px;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-left-style: solid;
	transition: 0.2s;
}

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
	<p id="scriptType">Name • Command</p>
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
			<option value="file">File</option>
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

<details id="text-editorui">
  <summary>Editor</summary>
	<label for="searchText">Find:</label>
	<input type="text" id="searchText"><br>
	<label for="replaceText">Replace:</label>
	<input type="text" id="replaceText"><br>
	<button id="highlightButton" onclick="toggleHighlight()">Find</button><br>
	<button onclick="replaceOneText()">Replace</button>
	<button onclick="replaceText()">Replace all</button>
	<p><i class="fa fa-info" aria-hidden="true"></i> Regex is supported</p>
</details>

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
  <hr>
  <div class="setting-item">
    <p>Number each line.</p>
    <button onclick="changeCodeLines()" id="changeCodeLines">Line Number</button>
  </div>
  <div class="setting-item">
    <p id="internetConnection">Loading...</p>
  </div>
</details>

<details id="tips">
  <summary>Tips</summary>
	<em>*Italics*</em>
	<strong>**Bold**</strong>
	<del>~~Line Through~~</del>
	<a>[Hyperlink Text](Link)</a>
	<a>[BDScript 2 Hyperlink Text\](Link)</a>
	<h3>### Small Header</h3>
	<h2>## Header</h2>
	<h1># Big Header</h1>
</details>
