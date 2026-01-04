# Color hex

<style>
.picker-container {
    width: 250px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 10px;
    font-family: sans-serif;
}
.color-btn {
    width: 100%;
    padding: 12px;
    background: #6c757d;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 15px;
    transition: background 0.3s;
}
.color-btn:hover {
    background: #5a6268;
}
.color-input {
    display: none;
    width: 100%;
    height: 40px;
    cursor: pointer;
    border: none;
    outline: none;
}
.input-group {
    display: flex;
    align-items: center;
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
    cursor: pointer;
}
</style>

<div class="picker-container">
  <input type="color" id="colorPicker" class="color-input">
  <button class="color-btn" id="openPicker">Color</button>
  
  <div class="input-group">
    <input type="text" id="hexInput" maxlength="7" placeholder="#000000">
    <div class="preview" id="colorPreview"></div>
  </div>
</div>