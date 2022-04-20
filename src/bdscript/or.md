# $or
Returns 'true' if at least one of the provided conditions is true, otherwise 'false' is returned.

## Usage
```php
$or[conditions;...]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| conditions | The condition. | [String](/src/resources/arguments/types.md#string)[\<comparsionSymbol\>]()[String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$if[$or[$message==hi;$message==hey;$message==hello]==true]
  Hello $username!
$endif
```
![]                       (https://user-images.githubusercontent.com/69215413/128616191-44fad868-fdd2-460b-8c32-89e92f32cc7a.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*