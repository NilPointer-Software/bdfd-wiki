# $modifyRolePerms
Modifies a role's permissions.

## Usage
```
$modifyRolePerms[roleID;permissions]
```

### Breakdown
- `roleID` - The role to modify the permissions for. Use `$guildID` for the *@everyone* role.
- `permissions` - The [permissions](../resources/permissions.md) to toggle, separate permissions using `;`.
