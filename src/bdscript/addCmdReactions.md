# $addCmdReactions
Adds reactions to the message that triggered the command.

## Usage
```
$addCmdReactions[emojis;...]
```
>  You can use unicode emojis or emoji IDs, not emoji names. *For emoji IDs*, the bot must be present in the server, that you are using the emoji from.

### Breakdown
- `emojis` - The emoji(s) the bot reacts with. Separate emojis using `;`.

## Unicode Emojis
Do not use emoji names: `$addCmdReactions[:smile:]`

Use the unicode version: `$addCmdReactions[😀]`

> List of unicode emojis: https://getemoji.com
 
## Emoji IDs
1. Type `\:TheEmojiName:`
2. Send the message.
3. Copy the ID it returns. (The emoji ID should be in this format: `<:emojiName:ID>`. If the emoji is animated, it should look like this: `<a:emojiName:ID>`)
4. Input the emoji ID into `$addCmdReactions[]`. (e.g `$addCmdReactions[<:hollyDab:828628880629825546>]`)

> 📝 This method requires [Developer Mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) enabled! 
