# $addMessageReactions
Adds reactions to the specified message.

## Syntax
```
$addMessageReactions[Channel ID;Message ID;Emojis;...]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The ID of the channel where the message is located.
- `Message ID` `(Type: Snowflake || Flag: Required)`: The ID of the message to which the reactions will be added.
- `Emojis` `(Type: Emoji || Flag: Required)`: The emoji(s) to add as reaction to the message. Use semicolons `;` as a separator to separate multiple emojis.

> You can use **unicode emojis**, **emoji IDs**, and **emoji aliases**.
> > For **emoji aliases**, make sure to put `:` in front and at the end of the alias. \
> > For **emoji IDs**, the bot must be present in the server that the emoji originates from. 
> 
> List of unicode emojis: [😋 Get Emoji](https://getemoji.com) \
> List of supported emoji aliases: [Emoji Aliases](https://botdesignerdiscord.com/public/emoji_alias_list)

## Example
```
$nomention
$trimContent
$addMessageReactions[$channelID;$message[1];👍;✨;<:coolemoji:991742553340792882>]

Successfully added the reactions to the message.
```
![example1](https://user-images.githubusercontent.com/111157596/249183563-89753bae-aa63-4f42-8172-30975f468189.gif)

## How to get emoji ID?

> This method requires [Developer Mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) to be enabled! 

1. Type `\:TheEmojiName:`
2. Send the message.
3. Copy the ID it returns. (The emoji ID should be in this format: `<:emojiName:ID>`. If the emoji is animated, it should look like this: `<a:emojiName:ID>`)
4. Input the emoji ID into `$addMessageReactions[]`. (e.g. `$addMessageReactions[$channelID;1123254137547653222;<:hollyDab:828628880629825546>]`)

![example2](https://media.discordapp.net/attachments/609162277312266280/745309789491298415/My_Movie_0.gif)

> If you're still having issues, check the [Troubleshooting](../resources/troubleshooting.md#the-bot-fails-to-add-reactions) page.
