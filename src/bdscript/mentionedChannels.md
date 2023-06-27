# $mentionedChannels
Returns the ID of the mentioned channel.

## Syntax
```
$mentionedChannels[Mention number;(Return current?)]
```

### Parameters 
- `Mention number` `(Type: HowMany || Flag: Required)`: The channel-mention to get from the author's message (`1` = first channel-mention, `2` = second, etc).
- `Return current?` `(Type: Bool || Flag: Optional)`: Whether to return the current channel ID if no channel is mentioned or not.

## Example
```
$nomention
$mentionedChannels[1]
```

![example](https://user-images.githubusercontent.com/69215413/126917253-33db5d96-fdb3-43a3-b614-1ac061701fb1.png)
