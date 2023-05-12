# $onlyForRoles
The command can only be executed by users with any of the provided roles

## Syntax
```
$onlyForRoles[Role names;...;Error message]
```

### Parameters 
- `Role names` `(Type: String || Flag: Emptiable)`: The roles that can use this command. Use semicolons `;` as a separator to separate multiple role names.
- `Error message` `(Type: String || Flag: Emptiable)`: The message to return when the user doesn't have the required roles.

## Example
```
$nomention
$onlyForRoles[Moderator;Admin;❌ You don't have any of the required roles to use this command!]

$c[Put your code here.]
```
