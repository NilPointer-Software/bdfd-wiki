# $channelSendMessage
Sends a message in the provided channel.

## Syntax
```
$channelSendMessage[Channel ID;Message]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel to send the message in.
- `Message` `(Type: String || Flag: Required)`: The message that gets sent to the channel.

## Example
```
$nomention
The message was sent to  the channel: <#835108724846493726>
$channelSendMessage[835108724846493726;Hello!]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    The message was sent to  the channel: <#fun>
```
\

### in **#fun** channel:
``` discord yaml
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hello!
```

