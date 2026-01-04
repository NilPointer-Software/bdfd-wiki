# Color hex

<style>
.picker-container {
    width: 250px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: sans-serif;
}
.color-input {
    width: 100%;
    height: 50px;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 0;
    margin-bottom: 15px;
}
.input-group {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}
input[type="text"] {
    flex: 1;
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 6px 0 0 6px;
    font-family: monospace;
    font-size: 14px;
}
.preview {
    width: 48px;
    height: 40px;
    border: 1px solid #ced4da;
    border-left: none;
    border-radius: 0 6px 6px 0;
    background: #ffffff;
}
.error {
    color: #dc3545;
    font-size: 12px;
    min-height: 16px;
    margin-top: 2px;
}
</style>

<div class="picker-container">
  <input type="color" id="colorPicker" class="color-input" value="#000000">
  
  <div class="input-group">
    <input type="text" id="hexInput" maxlength="7" placeholder="#000000">
    <div class="preview" id="colorPreview"></div>
  </div>
  <div class="error" id="errorText"></div>
</div>