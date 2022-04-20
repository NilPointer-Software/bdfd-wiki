# $createRole
Creates a new role.

## Usage
```php
$createRole[role name;color;(hoisted;mentionable)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| roleName | The name to give the new role. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| colorHex | The [color hex](https://htmlcolorcodes.com/color-picker) of the new role. | [Color](/src/resources/arguments/types.md#color) | [Required](/src/resources/arguments/flags.md#required)
| hoisted | Whether the role should be displayed separately (hoisted). | [Bool](/src/resources/arguments/types.md#bool) | [Vacantable](/src/resources/arguments/flags.md#vacantable)
| mentionable | Whether the role should be mentionable by everyone. | [Bool](/src/resources/arguments/types.md#bool) | [Vacantable](/src/resources/arguments/flags.md#vacantable)

## Examples
### Example #1
```
$nomention
$createRole[Cool Role;#FFFF00;yes;no]
Created new role!
```

![](https://user-images.githubusercontent.com/69215413/125972939-7d2950a4-1831-4696-8a23-d07d45fa9456.png)

![](https://user-images.githubusercontent.com/69215413/147582707-bb40c480-144e-4c45-b943-053c5bf3eab4.png)

### Example #2
*This example shows getting the new role's ID after creation.*
```
$nomention
$onlyPerms[manageroles;❌ You are missing the `MANAGE_ROLES` permission!]
$onlyBotPerms[manageroles;❌ I don't have the `MANAGE_ROLES` permission!]

$async[roleCreate]
  $createRole[Cool People;#FFD700;yes;no]
$endasync

$await[roleCreate]

New role created! <@&$roleID[Cool People]>
```
![](https://user-images.githubusercontent.com/69215413/147583019-0c3baf7b-3a36-41b6-b883-c9d4cf234f4e.png)

> ⚠️ **Warning:** This example requires [BDScript 2](/src/guides/scriptingModes.md) enabled!

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*