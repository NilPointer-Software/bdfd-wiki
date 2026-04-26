# $listVar
Returns a list of all variable names defined for this bot.

## Syntax
```
$listVar[(Separator)]
```

### Parameters
- `Separator` `(Type: String || Flag: Optional)`: The string used to separate variable names. Defaults to `, `.

## Example
```
$nomention
$listVar[, ]
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
  content: |
    Money, Level, XP
```

```admonish info title="Read more"
For more information, read the [Variables Guide](../guides/introduction/variables.md).
```