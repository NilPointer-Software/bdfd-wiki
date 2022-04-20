# $deleteMessage
Deletes a specific message.

## Usage
```php
$deleteMessage[channelID;messageID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel that the message belongs to. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| messageID | The message to delete. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$deleteMessage[845037187057451028;908831849961381929]
Delete message1
```
> 🤔 **Explanation:** This example deletes the message '908831849961381929' in channel '845037187057451028'.

> ⚠️ **Warning:** This command will not work on your bot as it doesn't have access to the channel or message provided. Therefore to use the example, you should replace '845037187057451028' with a channel ID and '908831849961381929' with a message ID your bot has access to.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*