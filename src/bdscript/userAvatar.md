# $userAvatar
Returns the provided user's avatar URL.

## Usage
```
$userAvatar[userID]
```

### Breakdown
- `userID` - The user to return the avatar for.

## Example
```
$nomention
$image[$userAvatar[$mentioned[1;yes]]]
```

![example](https://user-images.githubusercontent.com/69215413/125360420-d3bdbb80-e339-11eb-8a52-05289b2a62bf.png)

> 🧙‍♂️ You can use `?size=size` at the end of the URL to increase the size of the image. Example sizes: 1024, 2048, 4096.
```
$nomention
$image[$userAvatar[$mentioned[1;yes]]?size=4096]
```

![example2](https://user-images.githubusercontent.com/69215413/125360598-1aabb100-e33a-11eb-8a65-8123d6b80c18.png)
