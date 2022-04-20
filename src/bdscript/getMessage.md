# $getMessage
Gets data from a message, with the provided message and channel ID.

## Usage
```php
$getMessage[channelID;messageID;(property)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel that this message belongs to. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| messageID | The message to get the data from. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| property | The message data to get. **\*** | [Enum](/src/resources/arguments/types.md#enum) ? [MessageProperty](/src/enum/messageProperties.md) | [Required](/src/resources/arguments/flags.md#required)

**\*** `property`'s default is `content`.

## Example
```
$nomention
$argsCheck[>2;Please provide a channel and message ID! Usage: `!quote (channel) (messageID)`]
$description[$getMessage[$findChannel[$message[1]];$message[2]]]
$color[#673ab7]
$authorIcon[$getMessage[$findChannel[$message[1]];$message[2];avatar]]
$author[$getMessage[$findChannel[$message[1]];$message[2];username]#$discriminator[$getMessage[$findChannel[$message[1]];$message[2];authorID]]]
```
![](https://user-images.githubusercontent.com/69215413/122654424-3e078580-d119-11eb-9524-e68f08f787d7.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*