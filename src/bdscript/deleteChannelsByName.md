# $deleteChannelsByName
Deletes all channels matching the names provided.

## Syntax
```
$deleteChannelsByName[Channel name;...]
```

### Parameters
- `Channel name` `(Type: String || Flag: Required)`: The name(s) of the channel(s) to delete. Use semicolons `;` as a separator to separate multiple channel names.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `managechannels`

## Example
```
$nomention
$argsCheck[>1;Please provide a channel name!]
$onlyPerms[managechannels;❌ You need the `MANAGE_CHANNELS` permission to use that!]
Successfully deleted the channel #$channelName[$channelID[$message]]!
$deleteChannelsByName[$message]
```
![example](https://user-images.githubusercontent.com/111157596/232805102-060e69c3-89e1-4008-bf71-8b62f5cb4d72.png)
