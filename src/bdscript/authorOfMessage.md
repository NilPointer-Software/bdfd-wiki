# $authorOfMessage
Returns the ID of the provided message's author.

## Syntax
```
$authorOfMessage[Channel ID;Message ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel where the message is located.
- `Message ID` `(Type: Snowflake || Flag: Required)`: The message for which the author ID will be returned.

>  [How to get the message/channel ID guide.](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)

## Example
```
$nomention
Author of message: $username[$authorOfMessage[$message[1];$message[2]]]
```
![example](https://user-images.githubusercontent.com/113303649/209977869-72e418ce-9666-447e-b2c8-d9942d0735b7.png)
