# $removeButtons
Removes buttons from a message.

> 🧠 **Tip:** To remove a specfic button, use [`$removeComponent[]`](./removeComponent.md).

## Usage
```php
$removeButtons[(messageID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| messageID | The message to remove buttons from. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** If no `messageID` is provided, then buttons get removed from the bot's current command response.

> **Please refer to [buttons](/src/guides/buttons.md) guide for detailed info!**

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*