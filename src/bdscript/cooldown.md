# $cooldown
Sets a cooldown. The user can not run the command again, until the 'duration' is up.

## Usage
```
$cooldown[duration;errorMessage]
```

### Breakdown
`duration` - The duration of this cooldown. (e.g `30s`, `3m`, `3h`, `3d`, etc)

`errorMessage` - The message that is returned when the cooldown duration is still ongoing. `%time%` and other related functions can be used here.
> `%time%` returns how much time is left on the cooldown.

## Example
```
$nomention
Hi!
$cooldown[30s;Please wait %time%, then use that command again!]
```
