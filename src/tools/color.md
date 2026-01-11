# Color

<style>
.picker-container {
    position: relative;
    background-color: var(--color3);
    border-radius: 10px;
    margin-top: -5rem;
    padding-left: 15px;
    padding-right: 15px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    transition: 0.3s;
}
.picker-container:hover {
    transform: scale(1.015);
    border-radius: 12.5px;
    transition: 0.3s;
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
    color: #bbb;
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

## Functions
Here are all the functions related to hex colors.

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

**GET**:
- [`$getRoleColor[]`](../bdscript/getRoleColor.md)
- [`$roleInfo[]`](../bdscript/roleInfo.md)
- [`$userBannerColor[]`](../bdscript/userBannerColor.md)

**CHECK**:
- [`$isValidHex[]`](../bdscript/isValidHex.md)
