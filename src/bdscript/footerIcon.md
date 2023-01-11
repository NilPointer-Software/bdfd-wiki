# $footerIcon
Sets the embed footer icon.
> 🧙‍♂️ There must be footer text in order to set the footer icon.

## Usage
```
$footerIcon[icon url;(index)]
```

### Parameters
- `icon url` `(Type : URL || Flag : Emptiable)` : The URL to set the footer icon as. Must be a valid image URL.
- `index` `(Type : Integer || Flag : Vacantable)` : What embed the footer icon should belong to. Default is `1`. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$footer[⬅️ That is a footer icon!]
$footerIcon[$authorAvatar]
```

![example](https://user-images.githubusercontent.com/69215413/123020288-1544f180-d3a0-11eb-9378-3e83e1d1cb60.png)
