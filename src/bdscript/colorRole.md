# $colorRole
Changes the color of the mentioned role.
> ⚠️ **Warning:** The bot must have the `MANAGE_ROLES` permission to edit the roles. The bot can not edit roles higher than its own role. `MANAGE_ROLES` is an elevated permission, so 2FA may be required for the bot owner [(click me for more info)](/src/resources/2FA.md).

## Usage
```php
$colorRole[colorHex]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| colorHex | The [color hex](https://htmlcolorcodes.com/color-picker) to change the mentioned role color to. | [Color](/src/resources/arguments/types.md#color) 2| [Required](/src/resources/arguments/flags.md#required)


## Example
```
$onlyPerms[manageroles;❌ You are missing the `MANAGE_ROLES` permission!]
$onlyBotPerms[manageroles;❌ I don't have the `MANAGE_ROLES` permission!]
$argsCheck[>2;Please provide the needed arguments! The `colorHex` and `role` arguments are needed.]

$colorRole[$noMentionMessage]

✅ Changed role color!
```
![](https://user-images.githubusercontent.com/69215413/147579825-cec794d9-f1ea-4f9d-b4a1-3ebc9d689709.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*