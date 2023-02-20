# $onlyPerms
The command can only be executed if the user running the command has all the provided 'permissions'. Otherwise, the 'errorMessage' is returned.

## Usage
```
$onlyPerms[permissions;...;errorMessage]
```

### Parameters 
- `permissions` `(Type: Permission || Flag: Emptiable)`: The required permissions [(see permissions list)](../resources/permissions.md). Separate permissions using `;`.
- `errorMessage` `(Type: String || Flag: Emptiable)`: The message that is returned when the user is missing the required permissions.
