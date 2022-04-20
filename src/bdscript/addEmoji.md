# $addEmoji
Adds an emoji to the server.
> ⚠️ **Warning:** Bot must have the `MANAGE_EMOJIS` permission!

## Usage
```php
$addEmoji[name;imageURL;(returnEmoji)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| name | Name of the new emoii. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| imageURL | The image to upload as. | [URL](/src/resources/arguments/types.md#url) | [Required](/src/resources/arguments/flags.md#required)
| returnEmoji | Wether the display the emoji in the bot's message. | [Bool](/src/resources/arguments/types.md#bool) | [Optional](/src/resources/arguments/flags.md#optional)

## Example
```
$nomention
$argsCheck[>2;❌ Provide all needed arguments! Usage: `!add-emoji (imageURL) (emojiName)`]
$onlyBotPerms[manageemojis;❌ I need the `manage emojis` permission!]
$onlyPerms[manageemojis;❌ You need the `manage emojis` permission!]

Added new emoji: $addEmoji[$replaceText[$message;$message[1];;1];$message[1];yes]
```
![](https://user-images.githubusercontent.com/69215413/141665128-ddaf8ba9-3b6a-4789-8532-7e133fe0a16d.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*