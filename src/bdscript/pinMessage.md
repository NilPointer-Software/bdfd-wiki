# $pinMessage
Pins a message.

## Usage
```php
$pinMessage[(channelID;messageID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel where the message was sent. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)
| messageID | The message to pin. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** If `$pinMessage` is used without brackets or any arguments, then it pins the bot's message.

> 🧠 **Tip:** To pin the author's message, use `$pinMessage[$channelID;$messageID]`.

## Example
```
$nomention
$pinMessage
This is a cool pinned message! 😎
```
![](https://user-images.githubusercontent.com/69215413/123554940-97db0180-d750-11eb-95b5-2a995ff9c895.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*