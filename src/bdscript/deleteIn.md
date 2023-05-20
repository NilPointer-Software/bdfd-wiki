# $deleteIn
Deletes the bot's response after the provided duration.

## Syntax
```
$deleteIn[Duration]
```

### Parameters
- `Duration` `(Type: Duration || Flag: Required)`: The time to wait before deleting the message (e.g `3s`, `30s`, `1m`, etc). Max duration is `40m` (`120m` for premium bots).

## Example
*The message deletes itself after 3 seconds.*
```
$nomention
Hello World!
$deleteIn[3s]
```
![example](https://user-images.githubusercontent.com/111157596/232803197-f11780dd-754b-4203-8556-54629a677a65.gif)
