# $authorIcon
Adds a icon to the author section in the embed.
> 🧙‍♂️ $authorIcon can't work without author text ($author).

## Usage
```
$authorIcon[imageURL;(optional) embedIndex]
```

### Breakdown
`imageURL` - The image that appears in the author icon. This must be a valid image URL.

`embedIndex` - What embed the author icon should belong to. Default is `1`. [(learn more)](https://nilpointer-software.github.io/bdfd-wiki/guides/embedIndexes.html)

## Example
*This example shows the author's avatar as the author icon.*

```
$nomention
$authorIcon[$authorAvatar]
$author[⬅️ That is the author icon. This is the author text.]
```

![F9BE9A2A-730F-44C8-A6D4-12514058FEF2](https://user-images.githubusercontent.com/69215413/119849506-b001fb80-beda-11eb-8023-fd6c0548744f.jpeg)
