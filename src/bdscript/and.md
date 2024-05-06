# $and
Returns `true` if every provided condition is true, otherwise `false` is returned.

## Syntax
```
$and[Conditions;...]
```

### Parameters
- `Conditions` `(Type: String || Flag: Required)`: Checks that will be carried out. All conditions must be true for this function to return `true`. Separate conditions using `;`.

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
$and[$nickname==MineBartekSA;$message==Update]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Update
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    false
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    false
- user_id: 154148273307910144
  username: MineBartekSA
  color: "#f1bdee"
  content: |
    !example 
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    false
- user_id: 154148273307910144
  username: MineBartekSA
  color: "#f1bdee"
  content: |
    !example Update
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    true
  ```

> For more info, see the [If Guide](../guides/ifStatements.md).
