# $removeEmoji
Removes the given emoji from the server.

## Syntax
```
$removeEmoji[Emoji ID]
```

### Parameters
- `Emoji ID` `(Type: Snowflake || Flag: Required)`: The ID of the emoji which will be removed from the server.

## Example
```
$nomention
$removeEmoji[$message[1]]
Successfully removed the emoji.
```
![example1](https://user-images.githubusercontent.com/111157596/249171795-f499430e-f783-44e4-92ef-af6704dab5e8.png)\
![example2](https://user-images.githubusercontent.com/111157596/249172623-ba3d0889-c092-4b1c-ad12-893b3a40f9ef.png)

### How to get emoji ID?

> This method requires [Developer Mode](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) to be enabled! 

1. Type `\:TheEmojiName:`
2. Send the message.
3. Copy the ID it returns. (The emoji ID should be in this format: `<:emojiName:ID>`. If the emoji is animated, it should look like this: `<a:emojiName:ID>`)
4. Remove `<:emojiName:`/`<a:emojiName:` and `>` to leave just the Discord emoji ID. (e.g. `<:hollyDab:828628880629825546>` -> `828628880629825546`)
5. Input the Discord emoji ID into `$removeEmoji[]`. (e.g. `$removeEmoji[828628880629825546]`)

![example3](https://media.discordapp.net/attachments/609162277312266280/745309789491298415/My_Movie_0.gif)

> If you're still having issues, check the [Troubleshooting](../resources/troubleshooting.md#the-bot-fails-to-add-reactions) page.
