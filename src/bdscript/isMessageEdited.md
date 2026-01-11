# $isMessageEdited
Checks if the message is edited, if it's returns true if it's not it returns false.

## Syntax
```
$isMessageEdited[Channel ID;Message ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel ID where the message is.
- `Message ID` `(Type: Snowflake || Flag: Required)`: The ID of the message.

## Example
```
$nomention
$isMessageEdited[$channelID;$lastMessageID]
```

``` discord yaml
- username: Ivaylo
  user_id: 1251981607468798089
  color: "#E67E22"
  content: |
    Hello guys!
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  command:
    author: Ivaylo
    user_id: 1251981607468798089
    command: /example
    color: "#E67E22"
  content: |
    false
```

>  [How to get the Message/Channel ID guide.](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)

```admonish question title="What is this?"
How [`$channelID`](./channelID.md) and [`$lastMessageID`](./lastMessageID.md) works?
```
