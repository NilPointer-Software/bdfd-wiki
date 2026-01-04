# Timestamp Converter

<style>
        .converter-section {
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
        .converter-section:hover {
        	transform: scale(1.015);
        	border-radius: 12.5px;
        	transition: 0.3s;
        }
        .converter-section h2 {
        	margin-top: 60px;
        	padding-top: 15px;
        }
        .converter-section p {
        	margin-top: -15px;
        }
        label {
            font-weight: bold;
            display: block;
            margin-bottom: 8px;
            color: #34495e;
        }
        input {
                width: 100%;
                padding: 12px;
                border: 2px solid #ddd;
                border-radius: 10px;
                margin-bottom: 10px;
                box-sizing: border-box;
                transition: border-color 0.3s;
        }
        input:focus {
            outline: none;
            border-color: #3498db;
        }
        .result {
            margin-top: 15px;
            padding: 5px;
            background: hsl(0deg 0% 100% / 7%);
            border-radius: 10px;
            font-weight: bold;
            word-break: break-all;
            display: flex;
            align-items: center;
        }
        .timestamp {
            color: #7f8c8d;
            margin-top: 5px;
        }
        button {
            touch-action: manipulation;
        }

        button:not(#menu-bar i, #menu-bar .icon-button) {
	    background: hsl(0deg 0% 100% / 7%);
        }
        .current-time {
            text-align: center;
            padding: 10px;
            background-color: var(--color3);
            border-radius: 10px;
            margin-top: 20px;
        }
</style>

```admonish info
The timezone selected on your device is used.
```

<div class="converter-section">
    <h2>Date to Unix Time</h2>
    <p>Date</p>
    <input type="datetime-local" id="datetimepicker" oninput="updateUnixTime()">
    <p>Unix Timestamp:</p>
    <div class="result">
        <span id="unixtime-display">0</span>
        <div class="timestamp" id="timestamp-info"></div>
    </div>
</div>

<div class="converter-section">
    <h2>Unix Time to Date</h2>
    <p>Unix Timestamp:</p>
    <input type="number" id="unix-input" placeholder="e.g., 1704067200" oninput="updateDateFromUnix()" onkeypress="if(event.key === 'Enter') updateDateFromUnix()">
    <p>Date and Time:</p>
    <div class="result">
        <span id="date-display">Not set</span>
        <div class="timestamp" id="date-info"></div>
    </div>
</div>

<div class="current-time">
    <span id="current-time"></span>
</div>