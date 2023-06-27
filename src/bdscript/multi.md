# $multi
Muliplies the provided numbers.

## Syntax
```
$multi[Number;..]
```

### Parameters 
- `Number` `(Type: Float, Integer || Flag: Required)`: The numbers to multiply. Use semicolons `;` as a separator to separate multiple numbers.

## Example
```
$nomention
$argsCheck[>2;❌ Invalid usage. Usage: `!multiply (number1) (number2)`]
$multi[$message[1];$message[2]]
```

![example](https://user-images.githubusercontent.com/69215413/123551357-60178e00-d73f-11eb-9a21-578799084b88.png)
