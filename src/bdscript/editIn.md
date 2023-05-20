# $editIn
Edits the bot's response after the given time.

## Syntax
```
$editIn[Time;New message]
```

### Parameters
- `Time` `(Type: Duration || Flag: Required)`: The time to wait before editing the message (e.g `3s`, `30s`, `10m`). Max is `40m` (for premium users `120m`).
- `New message` `(Type: String || Flag: Required)`: The text that appears when this message is edited.

## Example
```
$nomention
This is a nice message to edit!
$editIn[5s;This is the edited message!]
```

### Output
**Before**

![example1](https://user-images.githubusercontent.com/69215413/123013307-fccdda80-d391-11eb-91c2-9406b8fe48da.png)

**After**

![example2](https://user-images.githubusercontent.com/69215413/123013297-f7709000-d391-11eb-9b00-55cf1387b498.png)
