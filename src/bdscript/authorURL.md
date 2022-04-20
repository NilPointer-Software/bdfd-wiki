# $authorURL
Adds a hyperlink to the author text.
> ⚠️ **Warning:** `$authorURL[]` can't work without [`$author[]`](./author.md) also being used.

## Usage
```
$authorURL[URL;(embedIndex)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| URL | The link to set as the author hyperlink. | [URL](/src/resources/arguments/types.md#url) | [Required](/src/resources/arguments/flags.md#required)
| embedIndex | The embed index, default is `1`. [(learn more)](/src/resources/embedIndexes.md) | [Integer](/src/resources/arguments/types.md#integer) | [Optional](/src/resources/arguments/flags.md#optional)

## Example
```
$nomention
$author[Click me to visit the BDFD website!]
$authorURL[https://botdesignerdiscord.com]
```
![](https://user-images.githubusercontent.com/69215413/119854987-8bf4e900-bedf-11eb-8699-cb4afab578f8.png)

*(tap on the author text to visit the site)*

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*