# $deleteChannels
Deletes the provided channel(s).

## Syntax
```
$deleteChannels[Channel IDs;...]
```

### Parameters
- `Channel IDs` `(Type: Snowflake || Flag: Required)`: The channels to delete. Use semicolons `;` as a separator to separate multiple channel IDs.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `managechannels`

## Example
```
$nomention
$argsCheck[>1;Please mention a channel!]
$onlyPerms[managechannels;You need the `MANAGE_CHANNELS` permission to use that!]
Successfully deleted $channelName[$mentionedChannels[1]]!
$deleteChannels[$mentionedChannels[1]]
```
![example](https://user-images.githubusercontent.com/69215413/122830487-65478980-d2b6-11eb-948b-652dd3800ff2.png)
