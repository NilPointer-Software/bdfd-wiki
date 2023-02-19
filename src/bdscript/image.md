# $image
Adds a image to the embed.

## Usage
```
$image[image url;(index)]
```

### Parameters
- `image url` `(Type: URL || Flag: Emptiable)`: The URL of the image that appears. Must be a valid image URL.
- `index` `(Type: Integer || Flag: Optional)`: What embed the image should belong to. The default is `1`. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$image[$userAvatar[$botID]]
```

![example](https://user-images.githubusercontent.com/69215413/123516701-76ecb080-d66b-11eb-9c65-fb7bbb5710b4.png)
