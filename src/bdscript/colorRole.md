# $colorRole
Changes the color of the mentioned role.

## Syntax
```
$colorRole[color hex]
```

### Parameters
- `color hex` `(Type: Color || Flag: Required)`: The [color hex](https://htmlcolorcodes.com/color-picker) to change the mentioned role color to.

## Example
```
$onlyPerms[manageroles;You need the manage_roles permission to use that!]
$argsCheck[>2;Please provide the needed arguments! The `colorHex` and `role` arguments are needed.]
$colorRole[$noMentionMessage]
✅ Changed role color!
```
