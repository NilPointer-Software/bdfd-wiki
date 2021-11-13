# $serverChannelExists
Returns whether or not the provided channel exists in the current server.

> 'true' means the channel exists in this server, otherwise 'false' is returned.

## Usage
```
$serverChannelExists[channelID]
```

### Breakdown
- `channelID` - The hypothetical channel which gets checked.

## Example
```
$nomention
$onlyIf[$serverChannelExists[$message]==true;Channel ID doesn't exist in this guild!]
$c[Rest of your code here...]
```

### Explanation
[`$channelExists`](./channelExists.md) returns whether or not the channel exists at all, doesn't matter which server the channel is in. `$serverChannelExists` checks if the channel exists in the server that the command was run in. Therefore, `$serverChannelExists` is great to be used as a [`$onlyIf`](./onlyIf.md) limiter, as this example shows it being used. This code checks if the channel provided in the user's message exists in the server.