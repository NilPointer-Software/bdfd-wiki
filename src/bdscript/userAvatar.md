# $userAvatar
Returns user's avatar URL.

## Syntax
```
$userAvatar[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to return the avatar for.

## Example
```
$nomention
$image[$userAvatar[$mentioned[1;yes]]]
```

![example](https://user-images.githubusercontent.com/69215413/125360420-d3bdbb80-e339-11eb-8a52-05289b2a62bf.png)

> 📌 You can optionally append a query string `?size=VALUE` at the end of the URL to increase the size of the avatar. The `size`'s value supports any power of two between 16 and 4096.
