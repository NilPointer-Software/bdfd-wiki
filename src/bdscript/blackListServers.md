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
**Hello $username!**
*Guild ID: $guildID*
```
![example](https://user-images.githubusercontent.com/113303649/211995843-0d9eba33-e36a-484f-ad97-eb6e67391af1.png)\
![example](https://user-images.githubusercontent.com/113303649/211996168-47ba94ff-e03d-40f9-8b33-5758454f5ce9.png)
