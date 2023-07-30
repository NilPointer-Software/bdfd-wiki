# $addCmdReactions
Adds reactions to the message that triggered the command.

## Syntax
```
$addCmdReactions[Emojis;...]
```

### Parameters
- `Emojis` `(Type: Emoji || Flag: Required)`: The emoji(s) the bot reacts with. Use semicolons `;` as a separator to separate multiple emojis.

> You can use **unicode emojis**, **emoji IDs**, and **emoji aliases**.
> > For **emoji aliases**, make sure to put `:` in front and at the end of the alias. \
> > For **emoji IDs**, the bot must be present in the server that the emoji originates from. 
> 
> List of unicode emojis: [😋 Get Emoji](https://getemoji.com) \
> List of supported emoji aliases: [Emoji Aliases](https://botdesignerdiscord.com/public/emoji_alias_list)

## Example
```
$nomention
$addCmdReactions[$message]
```
``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example ❤️
  reactions:
    - emoji: https://upload.wikimedia.org/wikipedia/commons/7/70/Symbolic_Love_Heart.png
      count: 1
      reacted: false
```

### How to get emoji ID?

> This method requires [Developer Mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) to be enabled! 

1. Type `\:TheEmojiName:`
2. Send the message.
3. Copy the ID it returns. (The emoji ID should be in this format: `<:emojiName:ID>`. If the emoji is animated, it should look like this: `<a:emojiName:ID>`)
4. Input the emoji ID into `$addCmdReactions[]`. (e.g. `$addCmdReactions[<:hollyDab:828628880629825546>]`)

![example](https://media.discordapp.net/attachments/609162277312266280/745309789491298415/My_Movie_0.gif)

> If you're still having issues, check the [Troubleshooting](../resources/troubleshooting.md#the-bot-fails-to-add-reactions) page.
