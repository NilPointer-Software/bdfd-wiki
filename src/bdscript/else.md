# $else
A block of code to be executed, if the `$if[]` condition is `false`.

## Syntax
```
$else
```

## Example
```
$nomention
$if[$authorID==$botOwnerID]
  $sendMessage[You are the developer of this bot!]
$else
  $sendMessage[You are not the developer of this bot!]
$endif
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
  content: |
    You are the developer of this bot!
- user_id: 154148273307910144
  username: MineBartekSA
  color: "#FF0000"
  content: |
    !example 
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    You are not the developer of this bot!
```

```admonish info title="Read more"
For more information, read the the [If Statements Guide](../guides/ifStatements.md).
```
