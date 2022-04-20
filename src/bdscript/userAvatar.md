# $userAvatar
Returns the provided user's avatar URL.

## Usage
```php
$userAvatar[userID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userID | The user to get the avatar of. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$image[$userAvatar[$mentioned[1;yes]]]
```
![](https://user-images.githubusercontent.com/69215413/125360420-d3bdbb80-e339-11eb-8a52-05289b2a62bf.png)

> 🧠 **Tip:** You can use `?size=size` at the end of the URL to increase the size of the image. Example sizes: 1024, 2048, 4096.
```
$nomention
$image[$userAvatar[$mentioned[1;yes]]?size=4096]
```
![](https://user-images.githubusercontent.com/69215413/125360598-1aabb100-e33a-11eb-8a65-8123d6b80c18.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*