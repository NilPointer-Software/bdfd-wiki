# $addReactions
Adds reactions to the bot's response.

## Syntax
```
$addReactions[Emojis;...]
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
Yes or No?
$addReactions[✅;:x:]
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !reactions

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Yes or No?
  reactions:
    - emoji: https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Twemoji12_2705.svg/640px-Twemoji12_2705.svg.png
      name: ":white_check_mark:"
      count: 1
    - emoji: https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Twemoji2_274c.svg/640px-Twemoji2_274c.svg.png
      name: ":x:"
      count: 1
```


### How to get emoji ID?

> This method requires [Developer Mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) to be enabled! 

1. Type `\:TheEmojiName:`
2. Send the message.
3. Copy the ID it returns. (The emoji ID should be in this format: `<:emojiName:ID>`. If the emoji is animated, it should look like this: `<a:emojiName:ID>`)
4. Input the emoji ID into `$addReactions[]`. (e.g. `$addReactions[<:hollyDab:828628880629825546>]`)

![example](https://media.discordapp.net/attachments/609162277312266280/745309789491298415/My_Movie_0.gif)

> If you're still having issues, check the [Troubleshooting](../resources/troubleshooting.md#the-bot-fails-to-add-reactions) page.
