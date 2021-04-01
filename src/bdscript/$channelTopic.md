# $channelTopic
`$channelTopic` returns a channel's topic/description.

## Usages
- There are two usages to the `$channelTopic` command.

### Usage #1
`$channelTopic` - Returns the topic of the channel that the command is being used in.

### Usage #2
`$channelTopic[CHANNEL ID]` - Returns the channel topic of the provided channel.

## Command Example
```$nomention
<#$mentionedChannels[1;yes]>'s channel topic is: 
```$channelTopic[$mentionedChannels[1;yes]]```
```

### Expected Output
```
#general's channel topic is:
```channel topic here```
```
