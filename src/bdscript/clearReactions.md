# $clearReactions
Removes reactions from the provided message.

## Syntax
```
$clearReactions[Channel ID;Message ID;Emoji]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel that the message belongs to.
- `Message ID` `(Type: Snowflake || Flag: Required)`: The message to remove the reaction from.
- `Emoji` `(Type: Emoji || Flag: Required)`: The emoji to remove from the message. Use `!all` to clear all reactions.

## Example
```
$nomention
$clearReactions[$channelID;$message;✅]
```
### Before 
``` discord yaml
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Message ID: 1216863258708021248
  reactions:
    - emoji: https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Twemoji12_2705.svg/640px-Twemoji12_2705.svg.png
      name: ":white_check_mark:"
      count: 52
      reacted: true
```
\
### After
``` discord yaml
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Message ID: 1216863258708021248
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 1216863258708021248
```

```admonish question title="What is this?"
How [`$channelID`](./channelID.md) and [`$message`](./message.md) works?
```