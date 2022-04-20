# $authorOfMessage
Returns the ID of the provided message's author.

## Usage
```php
$authorOfMessage[channelID;messageID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel where the message was sent. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| messageID | The message to get the author of. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
<@$authorOfMessage[$message[1];$message[2]]>
```
![](https://user-images.githubusercontent.com/69215413/141666026-e3bdd8b8-3852-4b0e-9efc-c82ab40208f2.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*