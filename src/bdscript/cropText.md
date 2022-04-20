# $cropText
Crops the provided text. If text is cropped then the `ending` is added at the end of the text.

## Usage
```php
$cropText[text;maxCharacters;ending]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| text | The text to crop. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| maxCharacters | The maxmium amount of characters, subsequent characters are removed. | [Integer](/src/resources/arguments/types.md#integer) | [Required](/src/resources/arguments/flags.md#required)
| ending | The text to end the cropped-text with (if the text was cropped). | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Example
```
$nomention
$cropText[$noMentionMessage;25;...]
```
![](https://user-images.githubusercontent.com/69215413/147585056-a5c4f817-dcff-406c-b16f-abd5d4a29571.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*