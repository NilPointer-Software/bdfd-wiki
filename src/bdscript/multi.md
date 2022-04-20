# $multi
Multiplies the provided numbers.

## Usage
```php
$multi[number;...]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| number | The number(s) to multiply together. | [Integer](/src/resources/arguments/types.md#integer) \| [Float](/src/resources/arguments/types.md#float) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$argsCheck[>2;❌ Invalid usage. Usage: `!multiply (number1) (number2)`]
$multi[$message[1];$message[2]]
```
![](https://user-images.githubusercontent.com/69215413/123551357-60178e00-d73f-11eb-9a21-578799084b88.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*