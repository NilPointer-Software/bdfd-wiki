# $onlyForRoleIDs
The command can only executed by the provided roles.

## Usage
```
$onlyForRoleIDs[roleID;...;errorMessage]
```

### Breakdown
- `roleID` - The role IDs which are allowed to use the command, separate IDs using `;`.
- `errorMessage` - The message to return when the user doesn't have the required roles.
