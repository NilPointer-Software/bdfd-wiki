# $messageEditedTimestamp
Returns a timestamp of when the message was edited.

## Syntax
```
$messageEditedTimestamp[Channel ID;Message ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel ID where the message is.
- `Message ID` `(Type: Snowflake || Flag: Required)`: The message ID of the message.

## Example
```
$nomention
$messageEditedTimestamp[$channelID;$lastMessageID]
```

![](https://github.com/user-attachments/assets/a432d7ba-6824-481c-8cec-2d7880ebbd2f)

```admonish help
[How to get the Message/Channel ID guide.](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)
```