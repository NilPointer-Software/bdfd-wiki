# $pinMessage[]
Pins a specific message using it's message ID & channel ID.

> ⚠️ A channel can have a maximum of 50 pinned messages.

## Syntax
```
$pinMessage[channelID;messageID]
```

### Parameters 
- `channelID` `(Type: Snowflake || Flag: Required)`: The channel where the message is located.
- `messageID` `(Type: Snowflake || Flag: Required)`: The message to pin.

## Example
```
$nomention
$pinMessage[$channelID;$messageID]
I have pinned your message!
```
![example](https://user-images.githubusercontent.com/95774950/180184192-bb11736d-1f92-4ce9-b3e0-df513179fa0c.png)
