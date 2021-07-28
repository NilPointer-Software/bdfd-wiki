# $userInfo
Allows you to make a 'user info' command without using a bunch of different functions at once. Returns info about the mentioned user.

## Usage
```
$userInfo[text/code]
```

⚠️ You can not include `$userInfo[]` in a command with a `$description[]` (because it makes one automatically).

### Subset Functions
You can use the 'subset-functions' below within `$userInfo`:

- `{username}` - Returns the user's username.
- `{ID}` - Gets the users ID.
- `{BOT}` - Checks if the user is a bot.
- `{discriminator}` - Gets the user's discriminator.

## Example
```
$nomention
$userInfo[Username: {username}
User ID: {ID}
Bot?: {BOT}
Discriminator: {discriminator}]
$title[User Info]
```

![example](https://user-images.githubusercontent.com/69215413/122833288-b6597c80-d2ba-11eb-88b8-9d1d5368b4f5.png)
