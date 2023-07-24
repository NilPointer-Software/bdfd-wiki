# $authorIcon
Adds an icon to the author section in the embed.

## Syntax
```
$authorIcon[Image URL;(Index)]
```

> `$authorIcon[]` will not work if there is no text provided in [`$author[]`](./author.md).

### Parameters
- `Image URL` `(Type: URL || Flag: Emptiable)`: The image for the author icon. This must be a valid image URL.
- `Index` `(Type: Integer || Flag: Optional)`: To which embed the author icon will be added. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$authorIcon[$authorAvatar]
$author[⬅️ That is the author icon. This is the author text.]
```
![example](https://user-images.githubusercontent.com/113303649/209976219-44583abf-be27-4874-bfff-331d51f45f1e.png)
