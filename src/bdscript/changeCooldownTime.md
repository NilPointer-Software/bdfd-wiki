# $changeCooldownTime
Changes the cooldown metrics. These can be used in cooldown error messages. It can be useful for translations.

## Syntax
```
$changeCooldownTime[days;hours;minutes;seconds]
```

### Parameters
- `days` `(Type: String || Flag: Required)`: The text to replace 'Days' with.
- `hours` `(Type: String || Flag: Required)`: The text to replace 'Hours' with.
- `minutes` `(Type: String || Flag: Required)`: The text to replace 'Minutes' with.
- `seconds` `(Type: String || Flag: Required)`: The text to replace 'Seconds' with.

 ### Sub-functions
 
 Name        | Type
------------|---------
`%time-d%`  | Day
`%time-h%`  | Hour
`%time-m%`  | Minute
`%time-s%`  | Second

## Example
```
$nomention
Hello $username!
$changeCooldownTime[Days⏰;Hours⏰;Mins🕧;Secs🕧]
$cooldown[10m;Please wait %time-m%!]
```

![example](https://user-images.githubusercontent.com/113303649/212069278-c045a1e8-4dba-4a16-a1a5-732bcb5211f1.png)

