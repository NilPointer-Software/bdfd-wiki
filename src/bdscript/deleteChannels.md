# $deleteChannels
Deletes the provided channel(s).

## Usage
```
$deleteChannels[channels]
```

### Breakdown
`channels` - The channels to delete. Separate channel IDs using `;`.

## Example
```
$nomention
$deleteChannels[$mentionedChannels[1]]
Successfully deleted $channelName[$mentionedChannels[1]]!
$onlyPerms[managechannels;You need the manage channels permission to use that!]
$argsCheck[>1;Please mention a channel!]
```

![Example](https://user-images.githubusercontent.com/69215413/122830487-65478980-d2b6-11eb-948b-652dd3800ff2.png)
