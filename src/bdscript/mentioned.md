# $mentioned
Returns the ID of the mentioned user.

## Usage
```php
$mentioned[mentionNumber;(fallbackToAuthor)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| mentionNumber | The user-mention to get from the author's message. **\*** | [HowMany](/src/resources/arguments/types.md#howmany) | [Required](/src/resources/arguments/flags.md#required)
| fallbackToAuthor | Whether to return the author's ID if no user is mentioned. | [Bool](/src/resources/arguments/types.md#bool) | [Optional](/src/resources/arguments/flags.md#optional) 

**\*** `1` = first user-mention, `2` = second, `>` = last mention, etc.

## Examples
### Example #1
*Getting the first mentioned user's ID:*
```
$nomention
$mentioned[1]
```
![](https://user-images.githubusercontent.com/69215413/126917181-5e4c71e3-6b8e-4d9d-96ef-2a9b8af7faf2.png)

### Example #2
*Getting the first mentioned user's username:*
```
$nomention
$username[$mentioned[1]]
```
![](https://user-images.githubusercontent.com/69215413/147861871-d9c668b8-5b0e-4037-9f8b-6076e4cd2e8a.png)

### Example #3
*Getting the first mentioned user's discriminator:*
```
$nomention
$discriminator[$mentioned[1]]
```
![](https://user-images.githubusercontent.com/69215413/147861885-9eea54a5-c21c-4f6c-9576-911c7da64b33.png)

### Example #4
*Getting the first mentioned user's tag:*
```
$nomention
$username[$mentioned[1]]#$discriminator[$mentioned[1]]
```
![](https://user-images.githubusercontent.com/69215413/147861899-c8188463-348d-45bc-8169-d616d4d67416.png)

### Example #5
*Mentioning the first mentioned user:*
```
$nomention
<@$mentioned[1]>
```
![](https://user-images.githubusercontent.com/69215413/147861918-93108950-62f1-429f-b210-783472434697.png)

### Example #6
*Getting the avatar of the first-mentioned user:*
```
$nomention
$image[$userAvatar[$mentioned[1]]]
```
![](https://user-images.githubusercontent.com/69215413/147861940-b7bea5ba-34fe-46d1-ac52-69a9909e1ee5.png)

> [See more information about `$userAvatar[]` here (click-me).](./userAvatar.md)

### Example #7
*Getting the first-mentioned user's creation date using [`$creationDate[]`](./creationDate.md):*
```
$nomention
$creationDate[$mentioned[1]]
```
![](https://user-images.githubusercontent.com/69215413/147862109-ea2b0741-2264-4432-bf53-cd6836e7c2ba.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*