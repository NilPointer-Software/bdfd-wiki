# Timestamp Converter

<style>
.editPage {
	visibility: hidden;
}
.converter-section {
    background: var(--card-bg);
	border-radius: var(--border-radius);
	border: 1px solid rgba(255, 255, 255, 0.05);
	margin-top: 1.5rem;
	padding-bottom: 0rem;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}
.converter-section h2 {
    margin-top: 60px;
    padding-top: 15px;
}
.converter-section p {
    margin-top: -15px;
}
.converter-section label {
    display: block;
    margin-bottom: 8px;
    color: #34495e;
}
.converter-section input {
    color: #fff;
    padding: 2.25rem !important;
    width: 100%;
	max-width: 100%;
	box-sizing: border-box;
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
#datetimepicker {
    margin-bottom: 1rem !important;
}
.result {
    margin-top: 10px;
    padding: 5px;
    background: hsl(0deg 0% 100% / 7%);
    border-radius: 10px;
    font-weight: bold;
    word-break: break-all;
    display: flex;
    height: 3.5rem !important;
    align-items: center;
}
.result p {
	margin-top: 1.5rem !important;
	padding: 5px;
	border-radius: 10px;
	word-break: break-all;
	display: flex;
	height: 3.5rem !important;
	align-items: center;
	user-select: none;
	-webkit-user-select: none;
}
.timestamp {
    color: #7f8c8d;
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
.timezone-error, #date-info {
    color: #dc3545 !important;
    font-size: 12px;
    min-height: 16px;
	margin-top: -0.75rem;
	margin-bottom: -0.75rem !important;
}
#date-info {
	margin-top: .5rem !important;
}
</style>

Here you can manage UnixTime for your commands.

```admonish note
Unix time is a system for tracking time by counting the number of seconds that have passed since January 1st, 1970. This value is stored as a simple integer, which computers can easily process and calculate with. For example, the function [`$getTimestamp`](../bdscript/getTimestamp.md) in BDFD can be used to get the current Unix timestamp or perform time-based operations for your bot.
```

```admonish info
The timezone selected on your device is used as default.
```

<div class="converter-section">
    <h2>Time zone</h2>
    <p>Select timezone for time calculations</p>
    <input type="timestamp" id="timezone" placeholder="e.g., Europe/London" oninput="updateTimezone()" onkeypress="if(event.key === 'Enter') updateTimezone()">
    <label class="timezone-error"></label>
</div>

<div class="converter-section">
    <h2>Date to Unix Timestamp</h2>
    <p>Select a date and time:</p>
    <input type="datetime-local" id="datetimepicker" oninput="updateUnixTime()">
    <div class="result">
		<p>Unix timestamp:</p>
        <span id="unixtime-display">0</span>
        <div class="timestamp" id="timestamp-info"></div>
    </div>
</div>

<div class="converter-section">
    <h2>Unix Timestamp to Date</h2>
    <p>Enter Unix timestamp:</p>
    <input type="number" id="unix-input" placeholder="e.g., 1704067200" oninput="updateDateFromUnix()" onkeypress="if(event.key === 'Enter') updateDateFromUnix()" min="0">
    <div class="result">
		<p>Date and time:</p>
        <span id="date-display">Not set</span>
    </div>
	<div class="timestamp" id="date-info"></div>
</div>

<div class="converter-section">
    <h2>Time Remaining</h2>
    <p>Time until selected Unix timestamp:</p>
    <div class="result">
        <span id="timer-display">Loading...</span>
    </div>
</div>

<div class="current-time">
    <span id="current-time"></span>
</div>

## Functions
Here are all the functions related to unix timestamp.

**GET**:
- [`$getEmbedData[]`](../bdscript/getEmbedData.md)
- [`$getTimestamp`](../bdscript/getTimestamp.md)
- [`$getTimestamp[]`](../bdscript/getTimestampComplex.md)
- [`$hostingExpireTime`](../bdscript/hostingExpireTime.md)
- [`$hostingExpireTime[]`](../bdscript/hostingExpireTimeComplex.md)
- [`$lastPinTimestamp`](../bdscript/lastPinTimestamp.md)
- [`$messageEditedTimestamp[]`](../bdscript/messageEditedTimestamp.md)
- [`$premiumExpireTime`](../bdscript/premiumExpireTime.md)

## Example
```
$nomention
Unix date: <t:1917043200:D>
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Unix date: <div class="discord-time-mark">January 10, 2030</div>
```

```admonish example
You can use [Discord timestamp highlighting](../resources/discordTimestamps.md) to make your code look nicer!
```
