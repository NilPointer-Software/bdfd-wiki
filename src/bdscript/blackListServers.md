# $blackListServers
 Disables this command for the provided servers.

 ## Syntax
 ```
 $blackListServers[guild IDs;..;error message]
 ```

 ### Parameters
- `guild IDs` `(Type : Snowflake || Flag : Emptiable)` : The servers to blacklist. Separate server IDs using `;`.
> [Where do I find server IDs? (click-me)](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)
- `error message` `(Type : String || Flag : Emptiable)` : The error to display when the server is blacklisted.
## Example
```
$nomention
$blackListServers[1009018669982031912;❌ You can't use this command!]
**Hello $username!**
*Guild ID: $guildID*
```
![example](https://user-images.githubusercontent.com/113303649/211995843-0d9eba33-e36a-484f-ad97-eb6e67391af1.png)

![example](https://user-images.githubusercontent.com/113303649/211996168-47ba94ff-e03d-40f9-8b33-5758454f5ce9.png)
