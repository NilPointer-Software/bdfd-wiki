# Timestamp Converter

<style>
        .converter-section {
                margin-bottom: 30px;
                padding: 20px;
                border-radius: 8px;
                background-color: var(--color3);
        }
        .converter-section:hover {
        	transform: scale(1.015);
        	border-radius: 12.5px;
        	transition: 0.3s;
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
            border-radius: 6px;
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
            min-height: 50px;
            display: flex;
            align-items: center;
        }
        .icon {
            display: inline-block;
            margin-right: 10px;
            font-size: 20px;
        }
        .timestamp {
            color: #7f8c8d;
            margin-top: 5px;
        }
        .current-time {
            text-align: center;
            padding: 15px;
            background-color: var(--color3);
            border-radius: 10px;
            margin-top: 20px;
        }
</style>

<div class="converter-section">
    <h2><span class="icon">📅</span> Date to Unix Time</h2>
    <label for="datetimepicker">Date</label>
    <input type="datetime-local" id="datetimepicker" oninput="updateUnixTime()">
    <label>Unix Timestamp:</label>
    <div class="result">
        <span id="unixtime-display">0</span>
        <div class="timestamp" id="timestamp-info"></div>
    </div>
</div>

<div class="converter-section">
    <h2><span class="icon">⏰</span> Unix Time to Date</h2>
    <label for="unix-input">Unix Timestamp:</label>
    <input type="number" id="unix-input" placeholder="e.g., 1704067200" oninput="updateDateFromUnix()" onkeypress="if(event.key === 'Enter') updateDateFromUnix()">
    <label>Date and Time:</label>
    <div class="result">
        <span id="date-display">Not set</span>
        <div class="timestamp" id="date-info"></div>
    </div>
</div>

<div class="current-time">
    <span id="current-time"></span>
</div>