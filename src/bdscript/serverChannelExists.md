# $serverChannelExists
Returns whether or not the provided channel exists in the current server.

> 'true' means the channel exists in this server, otherwise 'false' is returned.

[`$channelExists`](./channelExists.md) returns whether the channel exists at all, no matter which server the channel is in. `$serverChannelExists[]` checks if the channel exists in the server that the command was run in.

## Usage
```php
$serverChannelExists[channelID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The hypothetical channel which gets checked. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$onlyIf[$serverChannelExists[$message]==true;Channel ID doesn't exist in this guild!]
$c[Rest of your code here...]
```