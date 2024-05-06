# $blackListServers
Blocks certain servers from using the command.

## Syntax
```
$blackListServers[Guild IDs;...;Error message]
```

### Parameters
- `Guild IDs` `(Type: Snowflake || Flag: Emptiable)`: The server(s) to blacklist from using a command. Use semicolons `;` as a separator to separate multiple server IDs.
   > [Where do I find server IDs? (click-me)](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)
- `Error message` `(Type: String || Flag: Emptiable)`: The message that will be sent if the command is run in a blacklisted server.


## Example
```
$nomention
$blackListServers[1009018669982031912;❌ You can't use this command!]
Pong! $ping ms
*Guild ID: $guildID*
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
      ❌ You can't use this command!
```
\

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
      Pong! 1 ms
      <i>Guild ID: 1009018669982031912</i>
```
