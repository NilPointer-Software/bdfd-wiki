# $authorIcon
Adds a icon to the author section in the embed.
> 🧙‍♂️ `$authorIcon` can't work without author text [`$author`](./author.md).

## Usage
```
$authorIcon[imageURL;(optional) embedIndex]
```

### Breakdown
- `imageURL` - The image that appears in the author icon. This must be a valid image URL.
- `embedIndex` - What embed the author icon should belong to. Default is `1`. [(learn more)](/src/resources/embedIndexes.md)

## Example
```
$nomention
$authorIcon[$authorAvatar]
$author[⬅️ That is the author icon. This is the author text.]
```
![example](https://user-images.githubusercontent.com/69215413/125960772-6234a8ae-f96f-4ff9-9fac-1a634ef3cc4d.png)