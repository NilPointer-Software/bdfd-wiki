# $authorIcon
Adds an icon to the author section in a embed.
> ⚠️ **Warning:** `$authorIcon[]` can't work without [`$author[]`](./author.md) also being used.

## Usage
```php
$authorIcon[imageURL;(embedIndex)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| imageURL | The image for the author icon. | [URL](/src/resources/arguments/types.md#url) | [Required](/src/resources/arguments/flags.md#required)
| embedIndex | The embed index, default is `1`. [(learn more)](/src/resources/embedIndexes.md) | [Integer](/src/resources/arguments/types.md#integer) | [Vacantable](/src/resources/arguments/flags.md#vacantable)

## Example
```
$nomention
$authorIcon[$authorAvatar]
$author[⬅️ That is the author icon. This is the author text.]
```
![](https://user-images.githubusercontent.com/69215413/125960772-6234a8ae-f96f-4ff9-9fac-1a634ef3cc4d.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*