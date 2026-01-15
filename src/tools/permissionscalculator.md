# Permission Calculator

<div class="control-buttons">
    <button class="control-button" id="enableAll">Enable All</button>
    <button class="control-button disable" id="disableAll">Disable All</button>
</div>
        
<div class="permissions-grid" id="permissionsGrid">
    <!-- Permissions will be added via JavaScript -->
</div>
        
<div class="total-section">
    <h2>Current Permission Value:</h2>
    <div class="total-value" id="totalValue">0</div>
    <div class="hex-value" id="hexValue">0x0</div>
</div>
        
<div class="input-section">
    <input type="number" id="targetValue" placeholder="Enter permission value to find combinations (e.g., 10)" min="0">
</div>
        
<div class="results">
    <h3>Search Results:</h3>
    <div class="result-content" id="resultContent">
        Select permissions and/or enter a value to find combinations
    </div>
</div>