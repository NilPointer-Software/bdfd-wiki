# $calculate
Calculates a math expression.

## Syntax
```
$calculate[Expression]
```

### Parameters
- `Expression` `(Type: String || Flag: Required)`: The math expression to solve.

### Signs
- `+` - Addition.
- `-` - Subtraction.
- `/` - Division.
- `*` - Multiplication.
- `%` - Modulo.
- `**` - Power.
- `()` - Parentheses you can put equations in.

## Example
```
$nomention
$enableDecimals[yes]
$calculate[$message] 🧠
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 10+5.9-9
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    6.9 🧠
```

```admonish question title="What is this?"
How [`$enableDecimals[]`](./enableDecimals.md) and [`$message`](./message.md) works?
```
