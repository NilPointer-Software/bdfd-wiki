# $cooldown
Sets a cooldown. The user can not run the command again, until the 'duration' is up.

## Usage
```
$cooldown[duration;errorMessage]
```

### Parameters
- `duration` `(Type: Duration || Flag: Required)`: The duration of this cooldown. (e.g `30s`, `3m`, `3h`, `3d`, etc)
- `errorMessage` `(Type: String || Flag: Emptiable)`: The message that is returned when the cooldown duration is still ongoing. `%time%` and other related functions can be used here.

     > 📝 `%time%` returns how much time is left on the cooldown.

## Example
```
$nomention
$cooldown[30s;Please wait %time%, then use that command again!]
Hi!
```
