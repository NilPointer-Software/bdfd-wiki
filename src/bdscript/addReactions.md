# $addReactions
Adds reactions to the bot's response.
> ⚠️ **Warning:** The bot must have the `ADD_REACTIONS` permission in the channel to add reactions.

## Usage
```php
$addReactions[emojis;...]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| emojis | The emoji(s) the bot reacts with. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

> 📝 **Note:** You can use Unicode emojis or emoji IDs, not emoji names. *For emoji IDs:* The bot must be present in the server, that you are using the emoji from.\

> ⚠️ **Warning:** The bot must be responding with a message to add reactions to, because you can't add reactions to a message that doesn't exist. 

### Unicode Emojis
❌ Do not use emoji names: `$addReactions[:smile:]`\
✅ Use the unicode version: `$addReactions[😀]`

> [List of unicode emojis (click-me)](https://getemoji.com)
 
### Emoji IDs
Refer to the [using emojis guide](/src/resources/usingEmojis.md) to learn about emoji IDs. Syntax: `$addReactions[<emoji id>]`.

## Examples
### Example #1
```
$nomention
Hello World!
$addReactions[✅]
```
![](https://user-images.githubusercontent.com/69215413/141665540-2510f21a-5ca6-4838-b22f-636331cf61fa.png)

### Example #2
```
$nomention
Hello World!
$addReactions[😂;😅]
```
![](https://user-images.githubusercontent.com/69215413/141665564-80e46e0d-d764-4458-9193-c65186a937e9.png)

### Example #3
```
$nomention
Hello World!
$addReactions[<:Wave:856635526710558741>]
```
![](https://user-images.githubusercontent.com/69215413/141665593-26fad84c-8973-49ef-adf4-a9f0ae4ee0e5.png)

> 📝 **Note:** This code won't work for your bot because the specific 'Wave' emoji isn't in any servers with your bot. You can replace it with an emoji ID from a server your bot is in though!

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*