# $calculate
Calculates a math expression.

## Syntax
```
$calculate[expression]
```

### Parameters
- `expression` `(Type: String || Flag: Required)`: The math expression to solve.

## Signs
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
![example](https://user-images.githubusercontent.com/113303649/211189019-cb221556-9d2a-494a-a60f-abaf388dbf4b.png)


> [How `$enableDecimals[]` works?](./bdscript/enableDecimals.md)

