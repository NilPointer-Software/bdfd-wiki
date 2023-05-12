# $onlyForIDs
The command can only be executed by the provided users.

## Syntax
```
$onlyForIDs[User IDs;...;Error message]
```

### Parameters 
- `User IDs` `(Type: Snowflake || Flag: Emptiable)`: The users that can use this command. Use semicolons `;` as a separator to separate multiple user IDs.
- `Error message` `(Type: String || Flag: Emptiable)`: The error message that is returned, when the user running the command is not whitelisted.

## Example
```
$nomention
$onlyForIDs[$botOwnerID;❌ You are not my owner!]
$eval[$message]

$c[This can only be executed in BDScript 2.]
```
