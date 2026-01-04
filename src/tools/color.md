# Color hex

<style>
.picker-container {
    width: 250px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: sans-serif;
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
    width: 50px;
    height: 40px;
    cursor: pointer;
    border: 1px solid #ced4da;
    border-radius: 6px;
    padding: 0;
}
.error {
    color: #dc3545;
    font-size: 12px;
    min-height: 16px;
    margin-top: 2px;
}
</style>

<div class="picker-container">
  <div class="input-row">
    <input type="text" id="hexInput" class="hex-input" maxlength="7" placeholder="#000000">
    <input type="color" id="colorPicker" class="color-input" value="#000000">
  </div>
  <div class="error" id="errorText"></div>
</div>