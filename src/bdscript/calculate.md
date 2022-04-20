# $calculate
Calculates a math expression.

## Usage
```php
$calculate[expression]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| expression | The math expression to solve. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

> 📝 **Note:** Decimals are supported, however, each number has to end with a decimal or `.0` for a decimal number to be returned. Else, the solution will be rounded.

### Math Symbols
- `+` - Addition.
- `-` - Subtraction.
- `/` - Division.
- `*` - Multiplication.
- `%` - Modulus, the remainder after dividing one number by another. 100/9 equals 11 with a remainder of 1. So, `$calculate[100%9]` would return 1.
- `()` - Parentheses you can put equations in, which will change the [Order of Operations](https://en.wikipedia.org/wiki/Order_of_operations).

## Examples
### Example #1
```
$nomention
$calculate[$message] 🧠
```
![](https://user-images.githubusercontent.com/69215413/143595034-80a39e63-08d5-414c-8e0b-18b4a479629f.png)

### Example #2


## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*