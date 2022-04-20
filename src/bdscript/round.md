# $round
Rounds the provided number.

## Usage
```php
$round[number;decimalPlace]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| number | The number to round. | [Integer](/src/resources/arguments/types.md#integer) \| [Float](/src/resources/arguments/types.md#float) | [Required](/src/resources/arguments/flags.md#required)
| decimalPlace | The decimal place to round the number to. **\*** | [Integer](/src/resources/arguments/types.md#integer) | [Required](/src/resources/arguments/flags.md#required)

**\*** Using `0` for `decimalPlace` will [truncate](https://en.wikipedia.org/wiki/Truncation) the number.

## Example
```
$nomention
$round[100.123;1]
```
![](https://user-images.githubusercontent.com/69215413/125875437-417ae90b-c685-4aad-94b7-1767e153b7f3.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*