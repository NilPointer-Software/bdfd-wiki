# $footer
Sets the embed footer text.

## Syntax
```
$footer[Text;(Index)]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text to set the footer as. It cannot exceed more than 2048 characters.
- `Index` `(Type: Integer || Flag: Optional)`: What embed the footer text should belong to. The default is `1`. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$footer[Hi! I'm a footer.]
```

![example](https://user-images.githubusercontent.com/69215413/125977730-17b79b15-9b0d-494d-8d7b-39c50ccb2b0a.png)
