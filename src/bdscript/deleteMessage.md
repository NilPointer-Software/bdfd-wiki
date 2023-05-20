# $deleteMessage
Deletes a message.

## Syntax
```
$deleteMessage[Channel ID;Message ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel ID where the message is located.
- `Message ID` `(Type: Snowflake || Flag: Required)`: The ID of the message which will be deleted.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `managemessages`

## Example
```
$nomention
$deleteMessage[$channelID;$messageID]
Hello $username!
```
