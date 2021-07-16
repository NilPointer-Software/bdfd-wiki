# $channelTopic
Returns a channel's topic/description.

## Usages
There are two usages of the `$channelTopic` function.

### Usage #1
`$channelTopic` - Returns the topic of the channel that the command is being used in.

### Usage #2
`$channelTopic[CHANNEL ID]` - Returns the channel topic of the provided 'channelID.

## Example
```
$nomention
<#$mentionedChannels[1;yes]>'s channel topic is: `$channelTopic[$mentionedChannels[1;yes]]`
```

![example](https://user-images.githubusercontent.com/69215413/122830980-30880200-d2b7-11eb-8c08-6c7715db7d5e.png)
