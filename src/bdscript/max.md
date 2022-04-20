# $max
Returns the largest number out of the provided numbers.

## Usage
```php
$max[number;...]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| number | The numbers to pull the largest from. | [Integer](/src/resources/arguments/types.md#integer) | [Required](/src/resources/arguments/flags.md#required)

## Examples
### Example #1
```
$nomention
$max[100;20;50]
```
![](https://user-images.githubusercontent.com/69215413/147861446-9168bcd7-5382-42b5-b285-5cd093c49cb0.png)

### Example #2
```
$nomention
$max[98;105;87;9;-1]
```
![](https://user-images.githubusercontent.com/69215413/147861454-56b31c2f-0ef0-4777-9b8e-f67e88dab4a3.png)

### Example #3
```
$nomention
$max[10;10;10;10]
```
![](https://user-images.githubusercontent.com/69215413/147861461-f98ff0cb-0dac-4cc1-838b-22452090924c.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*