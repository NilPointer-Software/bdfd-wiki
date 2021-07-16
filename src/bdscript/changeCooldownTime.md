# $changeCooldownTime
Changes the cooldown metrics for `%time-d%`, `%time-h%`, `%time-m%`, and `%time-s%`. These can be used in cooldown error messages, its useful for translating.

## Usage
```
$changeCooldownTime[days;hours;minutes;seconds]
```

### Breakdown
- `days` - The text to replace 'Days' with.
- `hours` - The text to replace 'Hours' with.
- `minutes` - The text to replace 'Minutes' with.
- `seconds` - The text to replace 'Seconds' with.

## Example
```
Hi!
$changeCooldownTime[Days;Hours;Mins;Secs]
$cooldown[10m;Please wait %time-m%!]
```
