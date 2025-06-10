# $messageEditedTimestamp
Returns a timestamp of when the message was edited.

## Syntax
```
$messageEditedTimestamp[ChannelID;MessageID]
```

### Parameters
- `ChannelID` `(Type: Snowflake || Flag: Required)`: The channel ID where the message is.
- `MessageID` `(Type: Snowflake || Flag: Required)`: The message ID of the message.

## Example
```
$nomention
$messageEditedTimestamp[$channelID;$lastMessageID]
```

![](https://github.com/user-attachments/assets/a432d7ba-6824-481c-8cec-2d7880ebbd2f)