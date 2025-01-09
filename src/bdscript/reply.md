# $reply
Replies to the author's message.

## Syntax
```
$reply
```

## Example
```
$nomention
$reply
Hello, $displayName!
```

``` discord yaml
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
  reply:
    user_id: 803569638084313098
    author: RainbowKey
    mentions: true
    content: "!example"
  highlight: true
  content: |
    Hello, RainbowKey!
```

```admonish note
You can use [`$allowUserMentions[]`](./allowUserMentions.md) to disable the reply ping (mention).
```
