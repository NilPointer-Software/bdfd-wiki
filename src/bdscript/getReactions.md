# $getReactions
Returns a list of users separated by 'separator' that reacted to a message with a certain emoji.

## Usage
```php
$getReactions[channelID;messageID;separator;emoji]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel that the message belongs to. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| messageID | The message to get the user reactions from. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| separator | The separator between each user. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| emoji | The emoji reaction to get the users of. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$getReactions[2394734883474774;38483494328934989;, ;<:tip:3943484884834848483>]
```
![](https://user-images.githubusercontent.com/69215413/123293801-488f9980-d4e2-11eb-9a1b-241c4b51f845.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*