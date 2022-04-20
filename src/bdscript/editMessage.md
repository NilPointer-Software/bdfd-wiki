# $editMessage
Edits one of the bot's messages.

## Usage
```
$editMessage[channelID;messageID;newMessage;(title;description;color;footer)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel that this message belongs to. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| messageID | The ID of the message to edit. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| newMessage | The new message contents. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required) \|  [Emptiable](/src/resources/arguments/flags.md#emptiable)
| title | The new embed title. | [String](/src/resources/arguments/types.md#string) | [Optional](/src/resources/arguments/flags.md#optional)
| description | The new embed description. | [String](/src/resources/arguments/types.md#string) | [Optional](/src/resources/arguments/flags.md#optional)
| color | The new embed color hex. | [String](/src/resources/arguments/types.md#string) | [Optional](/src/resources/arguments/flags.md#optional)
| footer | The new embed footer text. | [String](/src/resources/arguments/types.md#string) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** `messageID` must be a message that the bot sent.

## Example
```
$nomention
$editMessage[853070225398693898;857040509549281292;This message has been edited!]
```

### Output
**Before**

![](https://user-images.githubusercontent.com/69215413/125876425-57ea4bf7-a357-48be-a6f6-ffb84df4be23.png)

**After**

![](https://user-images.githubusercontent.com/69215413/125876457-cf834ed3-f57c-41f3-b862-20433ec21b83.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*