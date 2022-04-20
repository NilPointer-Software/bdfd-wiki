# $author
Adds author text to the embed.

## Usage
```php
$author[text;(embedIndex)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| text | The author text contents. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required) 
| embedIndex | The embed index, default is `1`. [(learn more)](/src/resources/embedIndexes.md) | [Integer](/src/resources/arguments/types.md#integer) | [Optional](/src/resources/arguments/flags.md#optional)

## Example
```
$nomention
$author[This is the author text!]
```
![](https://user-images.githubusercontent.com/69215413/119855770-32d98500-bee0-11eb-830c-bfb8b65fac7f.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*