# $onlyPerms
The command can only be executed if the user running the command has all of the provided permissions.

## Syntax
```
$onlyPerms[Permissions;...;Error message]
```

### Parameters 
- `Permissions` `(Type: Permission || Flag: Emptiable)`: The required [permissions](../resources/permissions.md). Use semicolons `;` as a separator to separate multiple permissions.
- `Error message` `(Type: String || Flag: Emptiable)`: The message that is returned when the user is missing the required permissions.

## Example
```
$nomention
$onlyPerms[kick;❌ You need the `kick` permission to use this command!]
$kickMention[$noMentionMessage]
```
