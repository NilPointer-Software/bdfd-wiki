# $editEmbedIn
Edits the bot's message after the given time, as a embed.

## Usage
```
$editEmbedIn[time;title;description;footer;color]
```
> Optional fields can be left empty. Atleast one embed field (`title`, `description`, or `footer`) needs to be inputted (excluding `color`, which is always needed).

### Breakdown
`time` - The time to wait before editing the message (e.g `3s`, `30s`, `10m`). Max is `40m`. Required.

`title` - The new embed title. Optional.

`description` - The new embed description. Optional.

`footer` - The new embed footer. Optional.

`color` - The embed border color, must be a valid [color hex](https://htmlcolorcodes.com/color-picker). Required (use `0` for default color).

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
