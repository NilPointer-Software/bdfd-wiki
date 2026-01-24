# $serverName
Returns a server's name.

## Syntax
```
$serverName[Guild ID]
```

### Parameters 
- `Guild ID` `(Type: Snowflake || Flag: Required)`: The server to get the name of. Use [`$guildID`](./guildID.md) for the current server.

```admonish warning
The bot must be present in the server to return its name.
```

## Example
```
$nomention
Server Name: $serverName[$guildID]
```

- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Server Name: Bot Designer for Discord Official Server
```

```admonish question title="What is this?"
How [`$guildID`](./guildID.md) works?
```
