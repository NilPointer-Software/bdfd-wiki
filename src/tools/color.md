# Color

<style>
.editPage {
	visibility: hidden;
}
.picker-container {
    background: var(--card-bg);
	border-radius: var(--border-radius);
	border: 1px solid rgba(255, 255, 255, 0.05);
	margin-top: 1.5rem;
	padding-bottom: 1.5rem;
	padding-left: 15px;
	padding-right: 15px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
.picker-container h2 {
    margin-top: 60px;
    padding-top: 15px;
}
.picker-container p {
    margin-top: -15px;
}
.input-row {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 2.5px;
}
.hex-input {
    flex: 1;
    color: #fff;
    padding: 10px;
    background: hsl(0deg 0% 100% / 7%);
    border-radius: 10px;
	border-width: 0;
    border-radius: 10px;
    font-family: monospace;
    font-size: 14px;
    height: 3rem;
    width: 65%;
    outline: none;
	touch-action: manipulation;
	-webkit-user-select: none;
	user-select: none;
}
.color-input {
    background: hsl(0deg 0% 100% / 7%);
	font-size: 1.5rem;
	display: block;
	outline: none;
	border-radius: 10px;
	border-width: 0;
	height: 5.5rem;
    padding: 0;
    width: 5.5rem;
    touch-action: manipulation;
	-webkit-user-select: none;
	user-select: none;
}
.color-input::-webkit-color-swatch {
	border-radius: 10px;
	border-width: 0;
}
.random-result {
    display: flex;
    align-items: center;
}

#randomColorResult {
	padding: .9rem;
	width: 100%;
	border-radius: 10px;
	margin-top: -2.5rem !important;
	margin-bottom: 0 !important;
	color: #fff;
	font-weight: bold;
	transition: .3s;
}

#randomColorResult:hover {
	color: #000;
	opacity: 0.6;
	transition: .3s;
}
#randomColorButton {
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
	margin-bottom: 1.5rem !important;
	margin-top: -1rem !important;
    margin-right: 1rem !important;
	font-size: 1.5rem;
	margin: 0.25%;
	color: #fff;
	background: hsl(0deg 0% 100% / 7%);
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	transition: 0.2s;
}

#randomColorButton:hover {
	transform: scale(1.05);
	border-radius: 8px;
    border-width: 1px;
	transition: 0.2s;
}
.error {
    color: #dc3545;
    font-size: 12px;
    min-height: 16px;
    margin-top: 2px;
    padding-bottom: 1rem;
}
.valid-color {
    color: white;
    padding: 4px 8px;
    border-radius: 10px;
    font-weight: bold;
    width: fit-content;
    margin-left: -1.6rem;
    margin-top: -2.5rem;
    display: flex;
	text-shadow: 0px 0px 5px rgb(0 0 0 / 100%);
}
</style>

Here you can choose a color to use in your command.

```admonish note
Hex colors are codes that represent colors using hexadecimal values for red, green, and blue. A shorthand like #090 is a compact version of #009900, meaning no red, full green, and no blue, resulting in a pure green. The format #RGB expands each digit to RRGGBB, making it easy to define web colors, including in BDFD's color functions for customizing bot messages.
```

<div class="picker-container">
	<h2>Color Picker</h2>
  	<p>Select the color.</p>
  	<div class="input-row">
    	<input type="text" id="hexInput" class="hex-input" maxlength="20" placeholder="#000000" oninput="hexInputChange()">
    	<input type="color" id="colorPicker" class="color-input" value="#000000" oninput="colorPickerChange()">
  	</div>
  	<div class="error" id="errorText"></div>
  	<div id="validColorDisplay"><div class="valid-color" style="background:#000000">#000000</div></div>
</div>

<div class="picker-container">
  	<h2>Random Color</h2>
  	<p>Generate a random color.</p>
	<div class="random-result">
  		<button id="randomColorButton" onclick="generateRandomColor()">Generate</button>
  		<div id="randomColorResult" class="random-color-result"></div>
	</div>
</div>

## Functions
Here are all the functions related to hex colors.

```admonish note
You can use color hex in the "Color hex" parameters.
```

**SET**:
- [`$addContainer[]`](../bdscript/addContainer.md)
- [`$color[]`](../bdscript/color.md)
- [`$colorRole[]`](../bdscript/colorRole.md)
- [`$createRole[]`](../bdscript/createRole.md)
- [`$editEmbedIn[]`](../bdscript/editEmbedIn.md)
- [`$editMessage[]`](../bdscript/editMessage.md)
- [`$embedSuppressErrors[]`](../bdscript/embedSuppressErrors.md)
- [`$modifyRole[]`](../bdscript/modifyRole.md)
- [`$sendEmbedMessage[]`](../bdscript/sendEmbedMessage.md)
- [`$webhookColor[]`](../bdscript/webhookColor.md)
- [`$webhookSend[]`](../bdscript/webhookSend.md)

**GET**:
- [`$getRoleColor[]`](../bdscript/getRoleColor.md)
- [`$roleInfo[]`](../bdscript/roleInfo.md)
- [`$userBannerColor[]`](../bdscript/userBannerColor.md)

**CHECK**:
- [`$isValidHex[]`](../bdscript/isValidHex.md)

## Example
```
$nomention
$description[⬅️ Border color hex]
$color[#673ab7]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: <none>
  embed:
    description: ⬅️ Border color hex
    color: "#673ab7"
```


```admonish question title="What is this?"
How [`$color[]`](../bdscript/color.md) and [`$description[]`](../bdscript/description.md) works?
```
