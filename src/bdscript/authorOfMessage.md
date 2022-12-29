# $authorOfMessage
Returns the ID of the provided message's author.

## Syntax
```
$authorOfMessage[channel ID;message ID]
```

## Parameters
- `channel ID` - The channel where the message was sent.
- `message ID` - The message that the bot returns the author ID for.

>  [How get message/channel ID guide](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)

## Example

```
$nomention
Author of message: $username[$authorOfMessage[$message[1];$message[2]]]
```

![example](https://user-images.githubusercontent.com/113303649/209977869-72e418ce-9666-447e-b2c8-d9942d0735b7.png)
