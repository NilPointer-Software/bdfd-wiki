# $time
Changes the timezone for date/time functions.

## Syntax
```
$time[Timezone]
```

### Parameters
- `Timezone`: The timezone to change the date/time functions to. Accepts [TZ database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) timezones name as input.

## Example
```
$nomention

$time[America/New_York]
New York : $hour:$minute:$second

$time[Europe/Warsaw]
Warsaw : $optOff[$hour:$minute:$second]
```
![Screenshot_20221029_234758](https://user-images.githubusercontent.com/95774950/198847125-b093d143-7890-4478-a437-1c80c35c4c41.png)
