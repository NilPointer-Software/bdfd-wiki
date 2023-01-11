# $deleteChannels
Deletes the provided channel(s).

## Usage
```
$deleteChannels[channelIDs]
```

### Parameters
- `channels` `(Type : Snowflake || Flag : Required)` : The channels to delete. Separate channel IDs using `;`.

## Example
```
$nomention
$argsCheck[>1;Please mention a channel!]
$onlyPerms[managechannels;You need the manage channels permission to use that!]
Successfully deleted $channelName[$mentionedChannels[1]]!
$deleteChannels[$mentionedChannels[1]]
```

![Example](https://user-images.githubusercontent.com/69215413/122830487-65478980-d2b6-11eb-948b-652dd3800ff2.png)
