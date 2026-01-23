# $authorID
Returns message's author ID. 

## Syntax
```
$authorID
```

## Example
```
$nomention
This command was executed by <@$authorID>!
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  highlight: true
  content: |
    This command was executed by <@RainbowKey>!
```

```admonish note
You can disable mention with the [`$allowUserMentions[]`](./allowUserMentions.md) function.
```
