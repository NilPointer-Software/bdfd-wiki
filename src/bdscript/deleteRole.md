# $deleteRole
Deletes a role.

## Usage
```php
$deleteRole[roleID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| roleID | The role to delete. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$onlyBotPerms[manageroles;❌ I am missing the `MANAGE_ROLES` permission!]
$onlyPerms[manageroles;❌ You are missing the `MANAGE_ROLES` permission!]
$argsCheck[>1;❌ Please provide a role to delete!]
$onlyIf[$findRole[$message]!=;Invalid role provided!]

$deleteRole[$findRole[$message]]

Deleted role!
```
![](https://user-images.githubusercontent.com/69215413/125974782-09c332da-332b-4944-bb1c-b135fa6b5961.png)

![](https://user-images.githubusercontent.com/69215413/125974818-25d5f88c-7683-4c7b-a5cc-b37d1bb672f1.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*