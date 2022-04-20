# $divide
Divides the provided numbers.

## Usage
```php
$divide[a;b;...]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| a | The number to divide by `b`. | [Integer](/src/resources/arguments/types.md#integer) \| [Float](/src/resources/arguments/types.md#float) | [Required](/src/resources/arguments/flags.md#required)
| b | The number to divide `a` by. | [Integer](/src/resources/arguments/types.md#integer) \| [Float](/src/resources/arguments/types.md#float) | [Required](/src/resources/arguments/flags.md#required) 

## Example
```
$nomention
$argsCheck[>2;❌ Please provide the needed arguments! Usage: `!divide (number1) (number2)`]
Answer: $divide[$message[1];$message[2]]
```
![](https://user-images.githubusercontent.com/69215413/125975569-bfda8ef1-40f8-4e47-b3d7-340e3b4c1048.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*