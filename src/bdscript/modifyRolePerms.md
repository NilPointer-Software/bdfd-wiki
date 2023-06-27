# $modifyRolePerms
Modifies a role's permissions.

## Syntax
```
$modifyRolePerms[Role ID;Permissions;...]
```

### Parameters 
- `Role ID` `(Type: Snowflake || Flag: Required)`: The role to modify the permissions for. Use `$guildID` for the *@everyone* role.
- `Permissions` `(Type: Permission || Flag: Required)`: The [permissions](../resources/permissions.md) to toggle. Use semicolons `;` as a separator to separate multiple permissions.
