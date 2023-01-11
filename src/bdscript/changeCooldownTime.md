# $changeCooldownTime
Changes the cooldown metrics for `%time-d%`, `%time-h%`, `%time-m%`, and `%time-s%`. These can be used in cooldown error messages. It can be useful for translations.

## Usage
```
$changeCooldownTime[days;hours;minutes;seconds]
```

### Parameters
- `days` `(Type : String || Flag : Required)` : The text to replace 'Days' with.
- `hours` `(Type : String || Flag : Required)` : The text to replace 'Hours' with.
- `minutes` `(Type : String || Flag : Required)` : The text to replace 'Minutes' with.
- `seconds` `(Type : String || Flag : Required)` : The text to replace 'Seconds' with.

## Example
```
Hi!
$changeCooldownTime[Days;Hours;Mins;Secs]
$cooldown[10m;Please wait %time-m%!]
```
