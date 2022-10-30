# $authorIcon
Adds an icon to the author section in the embed.
> 🧙‍♂️ `$authorIcon` won't work without author text ($author).

## Usage
```
$authorIcon[image url;(index)]
```

### Breakdown
- `image url` - The image that appears in the author icon. This must be a valid image URL.
- `index` - What embed the author icon should belong to (Optional). Default is `1`. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$authorIcon[$authorAvatar]
$author[⬅️ That is the author icon. This is the author text.]
```

![example](https://user-images.githubusercontent.com/69215413/125960772-6234a8ae-f96f-4ff9-9fac-1a634ef3cc4d.png)
