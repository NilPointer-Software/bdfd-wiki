# $lowestRoleWithPerms
Returns the lowest role in the server that has all the provided permissions.

## Usage
```php
$lowestRoleWithPerms[permission;...]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| permissions | The permissions that the role must have. | [Permission](/src/resources/arguments/types.md#permission) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
Lowest Role with Administrator:  $roleName[$lowestRoleWithPerms[admin]] ($lowestRoleWithPerms[admin])
```
![](https://user-images.githubusercontent.com/69215413/123529558-7c73e600-d6bf-11eb-9716-9f217ac1bac0.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*