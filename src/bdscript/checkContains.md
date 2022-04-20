# $checkContains
Checks if the 'text' contains atleast one of the provided 'phrases'.
> 📝 **Note:** 'true' means the 'text' contains one of the 'phrases', otherwise 'false' is returned.

## Usage
```php
$checkContains[text;phrases;...]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| text | The text that will be checked. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| phrases | The phrases/words the bot will check for in 'text'. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$checkContains[$message;hi;hello]
```

![](https://user-images.githubusercontent.com/69215413/120049460-0741c200-bfe8-11eb-9dc7-3a584af2381e.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*