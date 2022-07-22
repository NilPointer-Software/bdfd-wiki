# $image
Adds a image to the embed.

## Usage
```
$image[image url;(index)]
```

### Breakdown
- `image url` - The URL of the image that appears. Must be a valid image URL.
- `index` - What embed the image should belong to (Optional). Default is `1`. [(learn more)](/src/resources/embedIndexes.md)

## Example
```
$nomention
$image[$userAvatar[$botID]]
```

![example](https://user-images.githubusercontent.com/69215413/123516701-76ecb080-d66b-11eb-9c65-fb7bbb5710b4.png)
