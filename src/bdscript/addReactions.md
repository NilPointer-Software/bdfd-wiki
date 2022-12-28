# $addReactions
Adds reactions to the bot's response.

## Usage
```
$addReactions[emojis]
```

## Parameters
- `emojis`: The emoji(s) the bot reacts with. Separate emojis using `;`.

> You can use Unicode emojis and emoji IDs, but not emoji names. For **emoji IDs**, the bot must be present in the server that the emoji originates from. 
> 
> List of unicode emojis: [😋 Get Emoji](https://getemoji.com)
 
### How to get emoji ID?

> This method requires [Developer Mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) enabled! 

1. Type `\:TheEmojiName:`
2. Send the message.
3. Copy the ID it returns. (The emoji ID should be in this format: `<:emojiName:ID>`. If the emoji is animated, it should look like this: `<a:emojiName:ID>`)
4. Input the emoji ID into `$addReactions[]`. (e.g `$addReactions[<:hollyDab:828628880629825546>]`)

> If you're still having issues, check the [Troubleshooting page](https://nilpointer-software.github.io/bdfd-wiki/nightly/resources/troubleshooting.html#the-bot-fails-to-add-reactions).
