# $modifyRolePerms
Modifies a role's permissions.

## Usage
```
$modifyRolePerms[roleID;permissions]
```

### Parameters 
- `roleID` `(Type : Snowflake || Flag : Required)` : The role to modify the permissions for. Use `$guildID` for the *@everyone* role.
- `permissions` `(Type : Permission || Flag : Required)` : The [permissions](../resources/permissions.md) to toggle, separate permissions using `;`.
