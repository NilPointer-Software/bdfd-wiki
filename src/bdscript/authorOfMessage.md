# $authorOfMessage
Returns the ID of the provided message's author.

## Syntax
```
$authorOfMessage[Channel ID;Message ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel where the message is located.
- `Message ID` `(Type: Snowflake || Flag: Required)`: The message for which the author ID will be returned.

>  [How to get the Message/Channel ID guide.](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)

## Example
```
$nomention
Author of message: $username[$authorOfMessage[$message[1];$message[2]]]
```

``` discord yaml
- user_id: 863865579483037726
  username: Kemi
  color: "#000000"
  content: |
    Message ID: 1135158746369245314
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 566370477967147018 1135158746369245314
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Author of message: Kemi
```

