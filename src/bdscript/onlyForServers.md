# $onlyForServers
The command can only be executed in the provided servers.

## Syntax
```
$onlyForServers[Server IDs;...;Error message]
```

### Parameters 
- `Server IDs` `(Type: Snowflake || Flag: Emptiable)`: The servers that the command can be executed in. Use semicolons `;` as a separator to separate multiple server IDs.
- `Error message` `(Type: String || Flag: Emptiable)`: The message that is returned when the command is used in a non-whitelisted server.

## Example
```
$nomention
$onlyForServers[566363823137882154;❌ This command can't be executed in this server!]

$c[Put your code here.]
```
