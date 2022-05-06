# $serverInfo
Allows you to make a 'server info' command without using a bunch of different functions at once. This function returns info about the current server.

## Usage
```
$serverInfo[text;(thumbnail)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| text |  The text that is returned. **\*** | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| thumbnail | Whether or not to show the server icon as the thumbnail. **\*** | [Bool](/src/resources/arguments/types.md#bool) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** You can also write some code here.

**\*** Default is `yes`.

### Warning
You can not include [`$serverInfo[]`](/src/bdscript/serverInfo.md) in a command with a [`$description[]`](/src/bdscript/description.md) because it makes one automatically.

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

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*
