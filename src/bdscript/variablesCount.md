# $variablesCount
Returns how many of a certain variable type the bot has.

## Syntax
```
$variablesCount[Type]
```

### Parameters
- `Type` `(Type: Enum || Flag: Required)`: The variable type to return the count for. Accepts either `user`, `server`, `channel`, or `globaluser` as input.

## Example
```
$nomention
$variablesCount[server]
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
    4
```

```admonish info title="Read more"
For more information, read the the [Variables Guide](../guides/introduction/variables.md).
```
