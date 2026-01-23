document.addEventListener("DOMContentLoaded", function () {
    var now = new Date();
    var day = now.getUTCDate();
    var time = now.getTime();
    var second = now.getUTCSeconds();
    var minute = now.getUTCMinutes();
    var hour = now.getUTCHours();
    var year = now.getUTCFullYear();
    var month = now.toLocaleString("en", { month: "long", timeZone: "UTC" });
    var formattedDate = now.toISOString().slice(0, 10);
    var unixTimeMs = now.getTime();
    var unixTimeSec = Math.floor(unixTimeMs / 1000);

    var dayElement = document.getElementById("day-mark");
    if (dayElement) {
        dayElement.innerHTML = "Current Day: " + day;
    }

    var unixElement = document.getElementById("unix-mark");
    if (unixElement) {
        unixElement.innerHTML = "Current Unix-time: " + unixTimeSec;
    }

    var moreUnixElement = document.getElementById("moreunix-mark");
    if (moreUnixElement) {
        moreUnixElement.innerHTML = `Unix Timestamp<br>
In Seconds - ${unixTimeSec}<br>
In Milliseconds - ${unixTimeMs}<br>
In Nanoseconds - ${unixTimeMs * 1000000}`;
    }

    var secondElement = document.getElementById("second-mark");
    if (secondElement) {
        secondElement.innerHTML = "Current Second: " + second;
    }

    var minuteElement = document.getElementById("minute-mark");
    if (minuteElement) {
        minuteElement.innerHTML = "Current Minute: " + minute;
    }

    var hourElement = document.getElementById("hour-mark");
    if (hourElement) {
        hourElement.innerHTML = "Current Hour: " + hour;
    }

    var yearElement = document.getElementById("year-mark");
    if (yearElement) {
        yearElement.innerHTML = "Current Year: " + year;
    }

    var monthElement = document.getElementById("month-mark");
    if (monthElement) {
        monthElement.innerHTML = "Current Month: " + month;
    }

    var dateElement = document.getElementById("date-mark");
    if (dateElement) {
        dateElement.innerHTML = "Current Date: " + formattedDate;
    }

    function getFormattedTime(timezone) {
        const date = new Date();
        const options = {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
            timeZone: timezone,
        };
        return date.toLocaleTimeString("en-US", options);
    }

    var timeElement = document.getElementById("time-mark");
    if (timeElement) {
        var utcTime = getFormattedTime("UTC");
        var moscowTime = getFormattedTime("Europe/Moscow");
        var utcDay = now.getUTCDate();
        
        timeElement.innerHTML = `New York Time: ${utcTime}, ${utcDay}<br>Moscow Time: ${moscowTime}, ${utcDay}`;
    }
});