# $mentionedChannels
Returns the ID of the mentioned channel.

```admonish fail
You can't use this function in slash command! Instead of this use [`$message[]`](./messageComplex.md).
```

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
Channel: $mentionedChannels[1]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <#main-chat>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Channel: 566370477967147018
```
