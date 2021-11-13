# $onlyForRoleIDs
The command can only executed by the provided roles (uses role IDs).

## Usage
```
$onlyForRolesIDs[roleIDs;errorMessage]
```

### Breakdown
- `roleIDs` - The role IDs to allow, separate IDs by `;`.
- `errorMessage` - The message to return when the user doesn't have the required roles.
