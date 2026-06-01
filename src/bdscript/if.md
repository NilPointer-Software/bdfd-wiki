# $if
Executes the following block of code if the provided condition is true.

## Syntax
```
$if[Condition]
```

### Parameters
- `Condition` `(Type: String || Flag: Required)`: Check that will be carried out.

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
$if[$authorID==$botOwnerID]
  $sendMessage[You are the developer of this bot!]
$endif
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
    You are the developer of this bot!
- user_id: 154148273307910144
  username: MineBartekSA
  color: "#FF0000"
  content: |
    !example
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    <discord-italic>Nothing</discord-italic>
```

```admonish info title="Read more"
For more information, read the [If Statements Guide](../guides/ifStatements.md).
```
