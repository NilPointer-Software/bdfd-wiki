# $onlyForRoles
The command can only executed by the provided roles.

## Usage
```
$onlyForRoles[roleNames;...;errorMessage]
```

### Parameters 
- `roleNames` `(Type : String || Flag : Emptiable)` : The role names to allow.
- `errorMessage` `(Type : String || Flag : Emptiable)` : The message to return when the user doesn't have the required roles.
