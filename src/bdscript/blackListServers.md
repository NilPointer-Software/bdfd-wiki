# $blackListServers
Disables this command for the provided servers.

## Usage
```
$blackListServers[serverIDs;errorMessage]
```

### Parameters
- `serverIDs` `(Type : Snowflake || Flag : Emptiable)` : The servers to blacklist. Separate server IDs using `;`.
> 🧙‍♂️ [Where do I find server IDs? (click-me)](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)

- `errorMessage` `(Type : String || Flag : Emptiable)` : The error to display when the server is blacklisted.
