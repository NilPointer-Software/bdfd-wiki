# $addCmdReactions
Adds reactions to the message that triggered the command.

## Usage
```php
$addCmdReactions[emojis;...]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| emojis | The emoji(s) the bot reacts with. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

> 📝 **Note:** You can use Unicode emojis or emoji IDs, not emoji names. *For emoji IDs:* The bot must be present in the server, that you are using the emoji from.

### Unicode Emojis
❌ Do not use emoji names: `$addCmdReactions[:smile:]`\
✅ Use the unicode version: `$addCmdReactions[😀]`

> [List of unicode emojis (click-me)](https://getemoji.com)
 
### Emoji IDs
Refer to the [using emojis guide](/src/resources/usingEmojis.md) to learn about emoji IDs. Syntax: `$addCmdReactions[<emoji id>]`.

## Examples
### Example #1
```
$nomention
$addCmdReactions[✅]
```
![](https://user-images.githubusercontent.com/69215413/141665170-b9818e76-184e-43fb-bb1c-7661d7ec0501.png)

### Example #2
```
$nomention
$addCmdReactions[😂;😅]
```
![](https://user-images.githubusercontent.com/69215413/141665447-3850b98b-8460-4073-84cd-81f8fe8eb278.png)

### Example #3
```
$nomention
$addCmdReactions[<:Wave:856635526710558741>]
```
![](https://user-images.githubusercontent.com/69215413/141665460-945a52a3-23d9-48b2-924f-bab4355728fb.png)

> 📝 **Note:** This code won't work for your bot because the specific 'Wave' emoji isn't in any servers with your bot. You can replace it with an emoji ID from a server your bot is in though!

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*