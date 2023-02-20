# $onlyForRoleIDs
The command can only executed by the provided roles.

## Usage
```
$onlyForRoleIDs[roleID;...;errorMessage]
```

### Parameters 
- `roleID` `(Type: Snowflake || Flag: Emptiable)`: The role IDs which are allowed to use the command. Separate IDs using `;`.
- `errorMessage` `(Type: String || Flag: Emptiable)`: The message to return when the user doesn't have the required roles.
