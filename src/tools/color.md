# Color hex

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
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 6px;
    font-family: monospace;
    font-size: 14px;
}
.color-input {
    background: hsl(0deg 0% 100% / 7%);
	color: #bbb;
	font-size: 1.5rem;
	display: block;
	outline: none;
	border-radius: 10px;
	border-width: 0;
	width: 70%;
	height: 7rem;
}
.error {
    color: #dc3545;
    font-size: 12px;
    min-height: 16px;
    margin-top: 2px;
}
.hex-input:invalid {
    border-color: #dc3545;
}
.hex-input:valid {
    border-color: #28a745;
}
</style>

<div class="picker-container">
  <h2>Color Picker</h2>
  <div class="input-row">
    <input type="text" id="hexInput" class="hex-input" maxlength="7" placeholder="#000000">
    <input type="color" id="colorPicker" class="color-input" value="#000000">
  </div>
  <div class="error" id="errorText"></div>
</div>