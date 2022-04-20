# $editIn
Edits the bot's response after the given time.

> 🧠 **Tip:** Want to edit a embed after a certain time? Check out [`$editEmbedIn[]`](./editEmbedIn.md).

## Usage
```php
$editIn[time;newMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| time |  The time to wait before editing the message.. **\*** | [Duration](/src/resources/arguments/types.md#duration) | [Required](/src/resources/arguments/flags.md#required)
| newMessage | The new message content. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

**\*** The max `time` is `40m`.

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

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*