# $authorIcon
Adds an icon to the author section in the embed.

## Syntax
```
$authorIcon[image url;(index)]
```
> `$authorIcon[]` will not work if there is no text provided in `$author[]`.
> 
## Parameters
- `image url`: The image that appears in the author icon. This must be a valid image URL.
- `index`: What embed the author icon should belong to. _(Optional)_ [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$authorIcon[$authorAvatar]
$author[⬅️ That is the author icon. This is the author text.]
```

![example](https://user-images.githubusercontent.com/113303649/209976219-44583abf-be27-4874-bfff-331d51f45f1e.png)

