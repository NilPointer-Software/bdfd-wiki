# $editEmbedIn
Edits the bot's message after the given time, as a embed.

## Usage
```
$editEmbedIn[time;(title;description;footer;color)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| time |  The time to wait before editing the message.. **\*** | [Duration](/src/resources/arguments/types.md#duration) | [Required](/src/resources/arguments/flags.md#required)
| title | The new embed title. | [String](/src/resources/arguments/types.md#string) | [Vacantable](/src/resources/arguments/flags.md#vacantable)
| description | The new embed description. | [String](/src/resources/arguments/types.md#string) | [Vacantable](/src/resources/arguments/flags.md#vacantable)
| footer | The new embed footer. | [String](/src/resources/arguments/types.md#string) | [Vacantable](/src/resources/arguments/flags.md#vacantable)
| color | The embed border color, must be a valid [color hex](https://htmlcolorcodes.com/color-picker) **\*** | [Color](/src/resources/arguments/types.md#color) | [Vacantable](/src/resources/arguments/flags.md#vacantable)

**\*** The max `time` is `40m`.

**\*** Use `0` for default color.

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

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*
