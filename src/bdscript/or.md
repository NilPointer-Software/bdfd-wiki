# $or
Returns `true` if at least one of the provided conditions is `true`, otherwise `false` is returned.

## Syntax
```
$or[Conditions;...]
```

### Parameters
- `Conditions` `(Type: String || Flag: Required)`: The condition to check. Separate conditions using `;`.

### Signs
`==` - Equal

`!=` - Not Equal

`<` -  Less Than

`>` - Greater Than

`>=` - Greater Than Or Equal To

`<=` - Less Than Or Equal To
- These signs could vary in meaning based on the order or intent of the if statement.
- If you are using text as your `x` and/or `y`, you can not use any other signs besides `==` and `!=`. However for numbers, you can use any sign shown in the above list.

## Example
```
$nomention
$or[$nickname==MineBartekSA;$message==Update]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Update
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    true
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
    false
- user_id: 154148273307910144
  username: MineBartekSA
  color: "#FF0000"
  content: |
    !example 
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    true
- user_id: 154148273307910144
  username: MineBartekSA
  color: "#FF0000"
  content: |
    !example Update
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    true
```

```admonish info title="Read more"
For more information, read the the [If Statements Guide](../guides/ifStatements.md).
```
