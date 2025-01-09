# $deleteMessage
Deletes a message.

## Syntax
```
$deleteMessage[Channel ID;Message ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel ID where the message is located.
- `Message ID` `(Type: Snowflake || Flag: Required)`: The ID of the message which will be deleted.

>  [How to get the Channel ID and Message ID guide.](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)
> 
### Permissions
Required permissions that the bot must have for this function to work properly:
- `managemessages`

## Example
```
$nomention
$deleteMessage[$channelID;$messageID]
Hello $username!
```
