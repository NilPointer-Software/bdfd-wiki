# $changeCooldownTime
Changes the cooldown metrics. These can be used in cooldown error messages. It can be useful for translations.

## Syntax
```
$changeCooldownTime[days;hours;minutes;seconds]
```
## Parameters
- `days`: The text to replace 'Days' with.
- `hours`: The text to replace 'Hours' with.
- `minutes`: The text to replace 'Minutes' with.
- `seconds`: The text to replace 'Seconds' with.

### Subfunctions

Name        | Type
------------|---------
`%time-d%`  | Days
`%time-h%`  | Hours
`%time-m%`  | Minutes
`%time-s%`  | Seconds

## Example
```
Hi!
$changeCooldownTime[Days⏰;Hours⏰;Mins🕧;Secs🕧]
$cooldown[10m;Please wait %time-m%!]
```
