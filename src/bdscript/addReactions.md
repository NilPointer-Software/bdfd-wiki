# $addReactions
Adds reactions to the bot's response.

## Usage
```
$addReactions[emojis]
```
> 🧙‍♂️ You can use unicode emojis or emoji IDs, not emoji names. *For emoji IDs:* The bot must be present in the server, that you are using the emoji from.

### Breakdown
- `emojis` - The emoji(s) the bot reacts with. Separate emojis using `;`.

## Unicode Emojis
Do not use emoji names: `$addReactions[:smile:]`

Use the unicode version: `$addReactions[😀]`

> List of unicode emojis: [😋 Get Emoji](https://getemoji.com)
 
## Emoji IDs
1. Type `\:TheEmojiName:`
2. Send the message.
3. Copy the ID it returns. (The emoji ID should be in this format: `<:emojiName:ID>`. If the emoji is animated, it should look like this: `<a:emojiName:ID>`)
4. Input the emoji ID into `$addReactions[]`. (e.g `$addReactions[<:hollyDab:828628880629825546>]`)

> 🧙‍♂️ Note: If `\:TheEmojiName:` doesn't work, try `:-:TheEmojiName:`. This requires [Developer Mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) enabled!
