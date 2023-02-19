# $onlyForServers
The command can only be executed in the provided servers.

## Usage
```
$onlyForServers[serverIDs;...;errorMessage]
```

### Parameters 
- `serverIDs` `(Type : Snowflake || Flag : Emptiable)` : The servers that the command can be executed in. Separate the IDs using `;`.
- `errorMessage` `(Type : String || Flag : Emptiable)` : The message that is returned when the command is used in a non-whitelisted server.
