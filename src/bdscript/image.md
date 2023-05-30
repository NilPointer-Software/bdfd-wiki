# $image
Adds an image to the embed.

## Syntax
```
$image[Image URL;(Index)]
```

### Parameters
- `Image URL` `(Type: URL || Flag: Emptiable)`: The URL of the image that appears. Must be a valid image URL.
- `Index` `(Type: Integer || Flag: Optional)`: What embed the image should belong to. The default is `1`. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$image[$userAvatar[$botID]]
```

![example](https://user-images.githubusercontent.com/69215413/123516701-76ecb080-d66b-11eb-9c65-fb7bbb5710b4.png)
