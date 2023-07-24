# $serverInfo
Allows you to make a server info command without using a bunch of different functions at once. This function returns info about the current server.

> ⚠️ You can not include `$serverInfo[]` in a command with a [`$description[]`](./description.md) (because it makes one automatically).

## Syntax
```
$serverInfo[Message;(Thumbnail?)]
```

### Parameters 
- `Message` `(Type: String || Flag: Required)`: The message format. Check [below](#subset-functions) for more information.
- `Thumbnail?` `(Type: Bool || Flag: Optional)`: Whether or not to show the server icon as the thumbnail. The default is `yes`.

### Subset-Functions
You can use the following "subset-functions" within `$serverInfo[]`:
- `{name}` - Returns the server's name.
- `{region}` - Returns the server's region.
- `{emoji}` - Returns the server's emojis in a list.
- `{owner}` - Returns the server owner's username.
- `{ID}` - Returns the server's ID.
- `{verificationLvl}` - Returns the server's verification level.
- `{large}` - Finds out if the server is considered "large". Returns `true` or `false`.

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
