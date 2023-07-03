# $serverChannelExists
Checks if the channel exists in the current server.

## Syntax
```
$serverChannelExists[Channel ID]
```

### Parameters 
- `Channel ID` `(Type: Snowflake, String || Flag: Emptiable)`: Returns "true" if the channel exists, otherwise "false" is returned.

## Example
```
$nomention
$serverChannelExists[$message[1]]
```
![example](https://user-images.githubusercontent.com/111157596/234031742-e57f230d-5086-4552-83e9-31b6c6bbe7b6.png)
