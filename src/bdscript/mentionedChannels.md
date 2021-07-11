# $mentionedChannels
Returns the ID of the mentioned channel.

## Usage
```
$mentionedChannels[mentionNumber;returnCurrent (yes/no)]
```

### Breakdown
`mentionNumber` - The channel-mention to get from the author's message  (`1` = first channel-mention, `2` = second, etc).

`returnCurrent` - Whether to return the current channel ID if no channel is mentioned or not.
