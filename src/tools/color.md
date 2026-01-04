# Color

<style>
.picker-container {
    position: relative;
    background-color: var(--color3);
    border-radius: 10px;
    margin-top: -6%;
    padding-bottom: 1.5rem;
    padding-left: 15px;
    padding-right: 15px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    transition: 0.3s;
}
.picker-container h2 {
    margin-top: 60px;
    padding-top: 15px;
}
.input-row {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 5px;
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
    height: 3.5rem;
    width: 70%;
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
	height: 5rem;
    padding: 0;
    width: 5rem;
    touch-action: manipulation;
	-webkit-user-select: none;
	user-select: none;
}
.error {
    color: #dc3545;
    font-size: 12px;
    min-height: 16px;
    margin-top: 2px;
}
</style>

<div class="picker-container">
  <h2>Color picker</h2>
  <p>Select a color in hex format</p>
  <div class="input-row">
    <input type="text" id="hexInput" class="hex-input" maxlength="7" placeholder="#000000" oninput="hexInputChange()">
    <input type="color" id="colorPicker" class="color-input" value="#000000" oninput="colorPickerChange()">
  </div>
  <div class="error" id="errorText"></div>
</div>

### Functions
`$color[]`
`$isValidHex[]`
`$sendEmbedMessage[]`
`$addContainer[]`