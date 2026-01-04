# Timestamp Converter

<style>
        .converter-section {
                position: relative;
        	background-color: var(--color3);
        	border-radius: 10px;
        	margin-top: -10%;
        	padding-bottom: 1.5rem;
        	padding-left: 15px;
        	padding-right: 15px;
        	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
        	transition: 0.3s;
        }
        .converter-section:hover, .current-time:hover {
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
            color: #bbb;
            padding: 10px;
            width: 95%;
            background: hsl(0deg 0% 100% / 7%);
            border-radius: 10px;
            border-width: 0;
            border-radius: 10px;
            font-family: monospace;
            font-size: 14px;
            height: 3rem;
            margin-bottom: 1rem;
            outline: none;
	    touch-action: manipulation;
	    -webkit-user-select: none;
	    user-select: none;
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
            width: 2rem;
        }
        .time-buttons {
            user-select: none;
	    -webkit-user-select: none;
	    display: flex;
	    justify-content: center;
	    flex-wrap: wrap;
            margin-bottom: 2rem;
            margin-top: -1rem;
        }
        .converter-section button {
	    outline: none;
	    touch-action: manipulation;
	    -webkit-user-select: none;
	    user-select: none;
	    padding-left: 1rem;
	    padding-right: 1rem;
	    height: 4rem;
	    border: none;
	    border-radius: 10px;
	    cursor: pointer;
	    margin-top: 1rem !important;
            margin-right: 1rem !important;
	    font-size: 1.5rem;
	    margin: 0.25%;
	    color: #fff;
	    background: hsl(0deg 0% 100% / 7%);
	    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
	    transition: 0.2s;
        }
        .converter-section button:hover {
	    transform: scale(1.05);
	    border-radius: 8px;
            border-width: 1px;
	    transition: 0.2s;
        }
        .current-time {
            text-align: center;
            padding: 10px;
            background-color: var(--color3);
            border-radius: 10px;
            margin-top: 20px;
            transition: 0.3s;
        }
</style>

Here you can manage UnixTime for your commands.

```admonish info
The timezone selected on your device is used.
```

<div class="converter-section">
    <h2>Date to Unix Time</h2>
    <p>Date:</p>
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

## Functions
- `$getTimestamp`