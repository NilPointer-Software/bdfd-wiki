# $userInfo
`$userInfo[]` allows you to make a 'user info' command without using a bunch of different functions at once. The bot returns info about the mentioned user.

## Usage
- You can use the 'commands' below within it:

`{username}` - Returns the user's username

`{ID}` - Gets the users ID

`{BOT}` - Checks if the user is a bot

`{discriminator}` - Gets the user's discriminator


Usage: `$userInfo[commands/code here]`

⚠️ You can not include `$userInfo[]` in a command with a `$description[]` (because it makes one automatically).

## Example Code
```
$userInfo[Username: {username}
User ID: {ID}
Bot?: {BOT}
Discriminator: {discriminator}]
$title[User Info]
```

### Expected Output
```
User Info
Username: Username
User ID: User-ID
Bot?: true/false
Discriminator: four-digit-number
```
