# $clearReactions
Removes reactions from the provided message.
> ⚠️ **Warning:** Bot must have the `MANAGE_MESSAGES` permission to clear reactions.

## Usage
```php
$clearReactions[channelID;messageID;emoji;...]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel that the message belongs to. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| messageID | The message to remove the reaction from. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| emoji | The emoji to remove from the message, or use `!all` to clear all reactions. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required) 

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*