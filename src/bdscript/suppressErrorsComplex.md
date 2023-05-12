# $suppressErrors[]
Blocks sending any error messages whenever an error occurs and sends the provided custom error instead.

## Syntax
```
$suppressErrors[Error message]
```

### Parameters
- `Error message` `(Type: String || Flag: Emptiable)`: The custom error message to send.

### Example
```
$nomention
$suppressErrors[**Error** : ` Invalid math expression! `]
$argsCheck[>1;Usage : ` !command <math expression> `]
$calculate[$message]
```
![example](https://user-images.githubusercontent.com/95774950/198820510-bc2140f0-838b-4357-80e7-e12c69b3739f.png)

## Related Resources
- [$embedSuppressErrors](./embedSuppressErrors.md)
