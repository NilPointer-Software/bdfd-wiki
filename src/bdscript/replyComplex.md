# $reply[]
Replies to a provided message.

## Syntax
```
$reply[Channel ID;Message ID]
```

### Parameters
- `Channel ID` `(Type : Snowflake || Flag : Required)` : The channel where the message is.
- `Message ID` `(Type : Snowflake || Flag : Required)` : The message to reply.

## Example
```
$nomention
$reply[$mentionedChannels[1];$noMentionMessage]
Replied!
```
![image](https://user-images.githubusercontent.com/113247745/199210421-a7833741-34ff-4670-99d5-d756ef85629e.png)
