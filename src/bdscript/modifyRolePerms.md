# $modifyRolePerms
Modifies a role's permissions.

## Usage
```php
$modifyRolePerms[roleID;permission;...]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| roleID | The role to modify the permissions for. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required) 
| permission | The [permission(s)](/src/resources/permissions.md) to toggle. **\***​**\*** | [Permission](/src/resources/arguments/types.md#permission) | [Required](/src/resources/arguments/flags.md#required)

**\*** Use `$guildID` in the first argument for the *@everyone* role.

**\***​**\*** If the permission it currently disabled, it gets enabled. If the permission is currently enabled, it gets disabled. There are no `+`, `-`, or `/` symbols.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*