# $modulo
Returns remainder between numbers.

## Syntax
```
$modulo[A;B]
```

### Parameters 
- `A` `(Type: Integer || Flag: Required)`: The dividend.
- `B` `(Type: Integer || Flag: Required)`: The divisor.

## Example
```
$nomention
$argsCheck[>2;❌ Invalid usage. Usage: `!modulo (number1) (number2)`]
$modulo[$message[1];$message[2]]
```

![example](https://user-images.githubusercontent.com/69215413/123551143-8d177100-d73e-11eb-811a-b72259c67edb.png)
