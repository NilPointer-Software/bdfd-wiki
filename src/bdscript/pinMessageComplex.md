# $pinMessage[]
Pins a specific message using its channel and message ID.

> ⚠️ A channel can have a maximum of 50 pinned messages.

## Syntax
```
$pinMessage[Channel ID;Message ID]
```

### Parameters 
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The ID of the channel where the message is located.
- `Message ID` `(Type: Snowflake || Flag: Required)`: The ID of the message to pin.

## Example
```
$nomention
$pinMessage[$channelID;$messageID]
I have pinned your message!
```
![example](https://user-images.githubusercontent.com/95774950/180184192-bb11736d-1f92-4ce9-b3e0-df513179fa0c.png)
