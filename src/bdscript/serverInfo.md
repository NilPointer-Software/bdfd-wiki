# $serverInfo
`$serverInfo` allows you to make a 'server info' command without using a bunch of different functions at once. It returns info about the current server.

## Usage
- You can use the 'commands' below within it:

`{name}` - Returns the server name

`{region}` - Returns the server region

`{emoji}` - Lists the server's emojis in a list

`{owner}` - Gives the owner's username

`{ID}` - Gets the guild ID

`{verificationLvl}` - Returns the server verification level 

`{large}` - Finds out if a server is considered 'large'

Usage: `$serverInfo[commands/code here;(optional)yes/no]`

⚠️ You can not include `$serverInfo[]` in a command with a `$description[]` (because it makes one automatically).

## Example Code
```
$title[Server Info]
$serverInfo[Server Name: {name}
Region: {region}
Owner: {owner}
Server ID: {ID}
Verify Level: {verificationLvl}
Emojis: {emoji}
Large Server?: {large};no]
```

### Expected Output
```Server Info
Server Name: Server-Name
Region: Server-Region
Owner: Server-Owner
Server ID: Guild-ID
Verify Level: low/medium/high/very high
Emojis: List-Of-Emojis
Large Server?: true/false
```

## What's The yes/no Argument?
`$serverInfo[commands/code here]` can work fine on its own, but automatically the bot returns the server icon in the thumbnail is the `yes/no` argument is left empty.

Disable Server Icon Thumbnail  - `$serverInfo[commands/code here;no]`

Enable Server Icon Thumbnail - `$serverInfo[commands/code here;yes]` OR `$serverInfo[commands/code here]`
