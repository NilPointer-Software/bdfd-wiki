# $onlyForRoleIDs
The command can only be executed by the provided roles.

## Syntax
```
$onlyForRoleIDs[Role IDs;...;Error message]
```

### Parameters 
- `Role IDs` `(Type: Snowflake || Flag: Emptiable)`: The role IDs which are allowed to execute the command. Use semicolons `;` as a separator to separate multiple role IDs.
- `Error message` `(Type: String || Flag: Emptiable)`: The message to return when the user doesn't have the required roles.

## Example
```
$nomention
$onlyForRoleIDs[790625761480146967;❌ You don't have any of the required roles to use this command!]

$c[Put your code here.]
```
