# $removeComponent
Removes certain component from a message.

## Usage
```php
$removeComponent[customID;(messageID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| customID | The custom ID of the component to remove. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| messageID | The message to remove the component from. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** If no `messageID` is provided, then the component gets removed from the bot's current command response.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*