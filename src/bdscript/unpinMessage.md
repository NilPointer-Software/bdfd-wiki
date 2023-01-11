# $unpinMessage
Unpins a pinned message from the channel.

## Syntax
```
$unpinMessage[Channel ID;Message ID]
```

### Parameters
- `Channel ID` `(Type : Snowflake || Flag : Required)` : The channel where the message is located.
- `Message ID` `(Type : Snowflake || Flag : Required)` : The ID of the message to unpin.

### Permissions
Required permissions that the bot must have for this function to work properly :
- `managemessages`

## Example
```
$nomention
$unpinMessage[$mentionedChannels[1];$noMentionMessage]
A message has been unpinned!
```
![Screenshot_20220925_163311](https://user-images.githubusercontent.com/95774950/192140919-60177751-bc8b-4b64-b892-52e2e4f14b4e.png)\
![InShot_20220925_163609635](https://user-images.githubusercontent.com/95774950/192140923-3ae37aec-3b12-48a9-907e-d352ba102477.jpg)
