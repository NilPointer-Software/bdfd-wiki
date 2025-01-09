# $executionTime
Returns how long the command took to execute, in milliseconds.

## Syntax
```
$executionTime
```

```admonish warning
You cannot use this function in [`$sendMessage[]`](./sendMessage.md), [`$channelSendMessage[]`](./findUser.md), [`$sendEmbedMessage[]`](./sendEmbedMessage.md), [`$sum[]`](./sum.md), [`$sub[]`](./sub.md), [`$divide[]`](./divide.md), [`$multi[]`](./multi.md), [`$calculate[]`](./calculate.md), [`$random[]`](./randomComplex.md), [`$textSplit[]`](./textSplit.md), [`$splitText[]`](./splitText.md), etc...
```

## Example
```
$nomention
Pong! $executionTime ms
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Pong! 12 ms
```
