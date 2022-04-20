# $embeddedURL
Sets a embed title's hyperlink (clickable text).
> ⚠️ **Warning:** This function only works if [`$title[]`](./title.md) is also used.

## Usage
```php
$embeddedURL[URL;(embedIndex)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| URL | The link to redirect to upon a user clicking it. | [URL](/src/resources/arguments/types.md#url) | [Required](/src/resources/arguments/flags.md#required)
| embedIndex | The embed index, default is `1`. [(learn more)](/src/resources/embedIndexes.md) | [Integer](/src/resources/arguments/types.md#integer) | [Optional](/src/resources/arguments/flags.md#optional)

## Example
```
$nomention
$title[Bot Designer For Discord]
$embeddedURL[https://botdesignerdiscord.com]
$description[Hello World!]
$color[#683cb4]
```
![](https://user-images.githubusercontent.com/69215413/125976626-45a94f29-cd9b-445f-a0ae-5dba6f49d2a6.png)

> 🤔 **Explanation:** When the blue text is clicked, it will take the user to https://botdesignerdiscord.com.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*