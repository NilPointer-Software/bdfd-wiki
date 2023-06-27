# $lowestRoleWithPerms
Returns the lowest role in the server that has all the provided permissions.

## Syntax
```
$lowestRoleWithPerms[Permissions;...]
```

### Parameters
- `Permissions` `(Type: Permission || Flag: Required)`: The [permissions](../resources/permissions.md) that the role needs to have. Use semicolons `;` as a separator to separate multiple permissions.

## Example
```
$nomention
Lowest Role with Administrator: $roleName[$lowestRoleWithPerms[admin]] ($lowestRoleWithPerms[admin])
```

![example](https://user-images.githubusercontent.com/69215413/123529558-7c73e600-d6bf-11eb-9716-9f217ac1bac0.png)
