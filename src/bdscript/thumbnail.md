# $thumbnail
Adds a thumbnail to the embed.

## Usage
```php
$thumbnail[imageURL;(embedIndex)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| imageURL | The image to set as the thumbnail. **\*** | [URL](/src/resources/arguments/types.md#url) | [Required](/src/resources/arguments/flags.md#required)
| embedIndex | What embed the thumbnail should belong to. Default is `1`. [(learn more)](/src/guides/embedIndexes.md) | [Integer](/src/resources/arguments/types.md#integer) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** Image not rendering? See [this article](/src/resources/troubleshooting/imageURLs.md).
## Example
```
$nomention
$description[This is the thumbnail ↘️]
$thumbnail[$authorAvatar]
```
![](https://user-images.githubusercontent.com/69215413/126551913-b3746b47-615a-48a3-9729-d07529e33f97.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*