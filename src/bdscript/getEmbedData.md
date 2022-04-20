# $getEmbedData
Fetches embed data from the provided message.

## Usage
```php
$getEmbedData[channelID;messageID;embedIndex;property]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel this message belongs to. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| messageID | The message to get this embed data from. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| embedIndex | The embed of this message to get data from. **\*** | [Integer](/src/resources/arguments/types.md#integer) | [Required](/src/resources/arguments/flags.md#required)
| property | The embed property to return. | [Enum](/src/resources/arguments/types.md#enum) ? [EmbedProperty](/src/enumdefs/embedProperties.md) | [Required](/src/resources/arguments/flags.md#required)

**\***  Use `1` for the first embed of this message.

## Example
```
$nomention
Title: $getEmbedData[876920205526319144;878299081380876339;1;title]
Description: $getEmbedData[876920205526319144;878299081380876339;1;description]
Footer: $getEmbedData[876920205526319144;878299081380876339;1;footer]
```
![](https://user-images.githubusercontent.com/69215413/130266834-50421e8e-fe9f-4b2e-8937-c9b870f3296d.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*