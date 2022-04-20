# $footerIcon
Sets the embed's footer icon.
> ⚠️ **Warning:** There must be [`$footer[]`](./footer.md) text in order to set a footer icon.

## Usage
```
$footerIcon[imageURL;(embedIndex)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| imageURL | The image to set the footer icon as. | [URL](/src/resources/arguments/types.md#url) | [Required](/src/resources/arguments/flags.md#required)
| embedIndex | The embed index, default is `1`. [(learn more)](/src/resources/embedIndexes.md) | [Integer](/src/resources/arguments/types.md#integer) | [Optional](/src/resources/arguments/flags.md#optional)

## Example
```
$nomention
$footer[⬅️ That is a footer icon!]
$footerIcon[$authorAvatar]
```
![](https://user-images.githubusercontent.com/69215413/123020288-1544f180-d3a0-11eb-9378-3e83e1d1cb60.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*