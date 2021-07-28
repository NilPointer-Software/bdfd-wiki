# $serverInfo
Allows you to make a 'server info' command without using a bunch of different functions at once. This function returns info about the current server.

## Usage
```
$serverInfo[text/code;(optional) showIcon (yes/no)]
```

### Breakdown
- `text/code` - The text that is returned.
- `showIcon` - Whether or not to show the server icon as the thumbnail. Default is `yes`.

⚠️ You can not include `$serverInfo[]` in a command with a `$description[]` (because it makes one automatically).

### Subset-Functions
You can use the 'subset-functions' below within `$serverInfo`:

- `{name}` - Returns the server name
- `{region}` - Returns the server region
- `{emoji}` - Returns the server's emojis in a list.
- `{owner}` - Returns the owner's username.
- `{ID}` - Gets the guild ID.
- `{verificationLvl}` - Returns the server verification level.
- `{large}` - Finds out if a server is considered 'large'.

## Example
```
$nomention
$title[Server Info]
$serverInfo[Server Name: {name}
Region: {region}
Owner: {owner}
Server ID: {ID}
Verify Level: {verificationLvl}
Emojis: {emoji}
Large Server?: {large};no]
```

![example](https://user-images.githubusercontent.com/69215413/122832982-3206f980-d2ba-11eb-9a31-8f94cad26df7.png)
