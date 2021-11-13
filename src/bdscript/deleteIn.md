# $deleteIn
Deletes the bot's response in after the provided duration.

## Usage
```
$deleteIn[duration]
```

### Breakdown
- `duration` - The time to wait before deleting the message (e.g `3s`, `30s`, `1m`, etc). Max duration is `40m`.

## Example
```
$nomention
Hello World!
$deleteIn[3s]
```