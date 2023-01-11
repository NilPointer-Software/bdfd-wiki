# $serverChannelExists

Checks if the channel exists in the guild

## Usage
```
$serverChannelExists[channel ID]
```

### Parameters 
-`Channel ID` `(Type : Snowflake,String || Flag : Emptiable)` : Returns `true` If could find the channel and `false` If couldn't find the channel

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
