# $serverChannelExists

Checks if the channel exists in the guild

## Usage
```
$serverChannelExists[channel ID]
```

### Breakdown
- `true` - If could find the channel.
- `false` - If couldn't find the channel

## Example 1
```
$nomention
$serverChannelExists[566370477967147018]
```

## Example 2
```
$nomention
$serverChannelExists[$channelID[channelName]]
```
