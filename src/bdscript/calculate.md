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
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    6.9 🧠
```

> [How does `$enableDecimals[]` work?](./enableDecimals.md)
