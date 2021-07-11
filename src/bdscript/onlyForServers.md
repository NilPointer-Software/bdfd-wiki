# $onlyForServers
The command can only be executed in the provided servers.

## Usage
```
$onlyForServers[serverIDs;errorMessage]
```

### Breakdown
`serverIDs` - The servers that the command can be executed in. Separate the IDs using `;`.

`errorMessage` - The message that is returned when the command is used in a non-whitelisted server.
