# $serverName
Returns a server's name.

## Syntax
```
$serverName[Guild ID]
```

### Parameters 
- `Guild ID` `(Type: Snowflake || Flag: Required)`: The server to get the name of. Use [`$guildID`](./guildID.md) for the current server.

> 🧙‍♂️ The bot must be present in the server to return its name.

## Example
```
$nomention
Server Name: $serverName[$guildID]
```
![example](https://user-images.githubusercontent.com/69215413/126522125-78166781-6dbf-4dbd-8000-ed4262ca5db8.png)
