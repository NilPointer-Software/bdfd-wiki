# $userInfo
Allows you to make a 'user info' command without using a bunch of different functions at once. Returns information of the first mentioned user.

> 📌 [`$userInfo`](./userInfo.md) automatically generates a description. So, [`$description`](./description.md) of index `1` should be avoided in the code.

## Syntax
```
$userInfo[Message]
```

### Parameters
- `Message` : The message to include in the description.

   > 📌 Following are sub-functions which you can use inside [`$userInfo`](./userInfo.md) to return information of the mentioned user :
   > - `{username}` : Returns the user's username.
   > - `{ID}` : Returns the ID of the user.
   > - `{BOT}` : Returns "true" if the user is a bot otherwise, "false".
   > - `{discriminator}` : Returns the user's discriminator.

## Example
```
$nomention
$title[User Info]
$userInfo[Username: {username}
User ID: {ID}
Bot?: {BOT}
Discriminator: {discriminator}]
```
![example](https://user-images.githubusercontent.com/69215413/122833288-b6597c80-d2ba-11eb-88b8-9d1d5368b4f5.png)

> 📌 [`$userInfo`](./userInfo.md) automatically generates a thumbnail of the mentioned user. If you want to remove it, put [`$thumbnail[]`](./thumbnail.md) (with empty argument) below [`$userInfo`](./userInfo.md) function.
