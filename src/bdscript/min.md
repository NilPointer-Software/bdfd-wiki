# $min
Returns the smallest number from the provided numbers.

## Usage
```php
$min[number;...]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| number | The numbers to pull the smallest from. | [Integer](/src/resources/arguments/types.md#integer) | [Required](/src/resources/arguments/flags.md#required)

## Examples
### Example #1
```
$nomention
$min[100;20;50]
```
![](https://user-images.githubusercontent.com/69215413/147864634-5023567d-1344-4ed8-bacc-dd0fd07077f4.png)

### Example #2
```
$nomention
$min[98;105;87;9;-1]
```
![](https://user-images.githubusercontent.com/69215413/147864638-3bcc40c0-1878-46ac-8fe8-5f903a86324f.png)

### Example #3
```
$nomention
$min[10;10;10;10]
```
![](https://user-images.githubusercontent.com/69215413/147864644-b38b491c-1c13-436b-ba3f-0b38be6ea6b7.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*