# $color
Sets the embed border color.

## Usage
```php
$color[colorHex;(embedIndex)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| colorHex | The [color hex](https://htmlcolorcodes.com/color-picker) to set the embed border color as. | [Color](/src/resources/arguments/types.md#color) | [Required](/src/resources/arguments/flags.md#required)
| embedIndex | The embed index, default is `1`. [(learn more)](/src/resources/embedIndexes.md) | [Integer](/src/resources/arguments/types.md#integer) | [Optional](/src/resources/arguments/flags.md#optional)

## Example
```
$nomention
$description[⬅️ That is the embed color border!]
$color[#673ab7]
```

![](https://user-images.githubusercontent.com/69215413/122653017-f16b7c80-d10f-11eb-9814-e65b38404fe1.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*