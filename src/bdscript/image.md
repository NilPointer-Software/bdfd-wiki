# $image
Adds a image to the embed.

## Usage
```
$image[imageURL;(optional) embedIndex]
```

### Breakdown
- `imageURL` - The URL of the image that appears. Must be a valid image URL.
- `embedIndex` - What embed the image should belong to. Default is `1`. [(learn more)](/src/resources/embedIndexes.md)

## Example
```
$nomention
$image[$userAvatar[$botID]]
```

![example](https://user-images.githubusercontent.com/69215413/123516701-76ecb080-d66b-11eb-9c65-fb7bbb5710b4.png)
