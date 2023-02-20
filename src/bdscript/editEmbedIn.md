# $editEmbedIn
Edits the bot's message after the given time, as an embed.

## Usage
```
$editEmbedIn[time;(title;description;footer;color)]
```
> 📝 Optional fields can be left empty. At least one embed field (`title`, `description`, or `footer`) needs to be inputted.

### Parameters
- `time` `(Type: Duration || Flag: Required)`: The time to wait before editing the message (e.g `3s`, `30s`, `10m`). Max time is 40 minutes (for premium users, it's 120 minutes). Required.

- `title` `(Type: String || Flag: Vacantable)`: The new embed title. Optional.
- `description` `(Type: String || Flag: Vacantable)`: The new embed description. Optional.
- `footer` `(Type: String || Flag: Vacantable)`: The new embed footer. Optional.
- `color` `(Type: Color || Flag: Vacantable)`: The embed border color, must be a valid [color hex](https://htmlcolorcodes.com/color-picker) or color integer number. Use `0` for the default color. Optional.

## Example
```
$nomention
$title[Cool Title]
$description[This is a cool embed to edit!]
$color[#6A96FC]
$editEmbedIn[5s;Epic Title;This is the edited description!;;#E46AFC]
```

### Output
**Before**

![example1](https://user-images.githubusercontent.com/69215413/123012695-bdeb5500-d390-11eb-82a0-5e4fdb4b337e.png)

**After**

![example2](https://user-images.githubusercontent.com/69215413/123012680-b7f57400-d390-11eb-866c-6f0aa0fdf9f7.png)
