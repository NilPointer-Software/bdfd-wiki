# $numberSeparator
Separates the thousands in a number.

## Usage
```php
$numberSeparator[number;(separator)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| number | The number to apply the separator to. | [Integer](/src/resources/arguments/types.md#integer) | [Required](/src/resources/arguments/flags.md#required)
| separator | The separator between each thousand. **\*** | [String](/src/resources/arguments/types.md#string) | [Vacantable](/src/resources/arguments/flags.md#vacantable)

**\*** The default `separator` is `,`.

## Examples
### Example #1
```
$nomention
$numberSeparator[5000]
```
![](https://user-images.githubusercontent.com/69215413/126918009-8f4ba7d1-875b-43da-a24b-5126464996b9.png)

### Example #2
```
$nomention
$numberSeparator[100000]
```
![](https://user-images.githubusercontent.com/69215413/148145734-37735eab-e833-4076-9fd0-67801cbd28f8.png)

### Example #3
```
$nomention
$numberSeparator[1000000;_]
```
![](https://user-images.githubusercontent.com/69215413/148145757-de7591c7-7ce6-42dc-a338-0dfbf625a2ce.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*