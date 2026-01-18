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
	padding-bottom: 0rem;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
.picker-container h2 {
    margin-top: -.5rem;
    padding-top: 1.5rem;
}
.picker-container p {
    margin-top: .75rem;
}
.input-row {
	display: flex;
	gap: 1rem;
	align-items: center;
}
.hex-input {
    flex: 1 !important;
    color: #fff;
    padding-top: 2.25rem;
	padding-bottom: 2.25rem;
	padding-left: 1rem;
    background: hsl(0deg 0% 100% / 7%);
    border-radius: var(--border-radius);
	border-width: 0;
    font-family: monospace;
    font-size: 1.5rem;
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
	border-radius: var(--border-radius);
	border-width: 0;
	height: 5.5rem;
    padding: 0;
    width: 5.5rem;
    touch-action: manipulation;
	-webkit-user-select: none;
	user-select: none;
}
.color-input::-webkit-color-swatch {
	border-radius: var(--border-radius);
	border-width: 0;
}
.random-result {
    display: flex;
    align-items: center;
}

#randomColorResult {
	padding: .9rem;
	width: 100%;
	border-radius: var(--border-radius);
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
	border-radius: var(--border-radius);
	cursor: pointer;
	margin-bottom: 1.5rem !important;
	margin-top: -1rem !important;
    margin-right: 1rem !important;
	font-size: 1.5rem;
	margin: 0.25%;
	color: #fff;
	background: hsl(0deg 0% 100% / 7%);
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
.error {
    color: #dc3545;
    font-size: 1rem;
    min-height: 1rem;
    padding-bottom: 1rem;
}
.valid-color {
    color: white;
    padding: 4px 8px;
    border-radius: var(--border-radius);
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
