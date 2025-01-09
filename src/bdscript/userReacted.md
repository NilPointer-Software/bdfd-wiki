# $userReacted
Checks if a user reacted to a message with the provided emoji. Returns "true" if the user did react otherwise, "false".

## Syntax
```
$userReacted[Channel ID;Message ID;User ID;Emoji]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel where the message is located.
- `Message ID` `(Type: Snowflake || Flag: Required)`: The message to check the reactions for.
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to check the reaction for.
- `Emoji` `(Type: Emoji || Flag: Required)`: The emoji of the reaction to check.

## Example
```
$nomention
$userReacted[$channelID;$message;$authorID;❤️]
```

``` discord yaml
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Reactions! Message ID: 1291801528054845451
  reactions:
    - emoji: https://em-content.zobj.net/thumbs/120/mozilla/36/heavy-black-heart_2764.png
      name: ":heart:"
      reacted: true
      count: 2
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 1291801528054845451
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Reacted?: <code>true</code>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Reactions! Message ID: 1291802266793414717
  reactions:
    - emoji: https://em-content.zobj.net/thumbs/120/mozilla/36/heavy-black-heart_2764.png
      name: ":heart:"
      count: 1
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 1291802266793414717
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Reacted?: <code>false</code>
```

```admonish question title="What is this?"
How [`$channelID`](./channelID.md), [`$message`](./message.md) and [`$authorID`](./authorID.md) works?
```
