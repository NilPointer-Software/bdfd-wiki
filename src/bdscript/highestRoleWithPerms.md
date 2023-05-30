# $highestRoleWithPerms
Returns the highest role in the current server that has all the provided permissions.

## Syntax
```
$highestRoleWithPerms[Permissions]
```

### Parameters
- `Permissions` `(Type: Permission || Flag: Required)`: The [permissions](../resources/permissions.md) that the role needs to have. 

## Example
```
$nomention
Highest Role with Administrator: $roleName[$highestRoleWithPerms[admin]] ($highestRoleWithPerms[admin])
```

![example](https://user-images.githubusercontent.com/69215413/123514351-a4802c80-d660-11eb-9ff1-3270e561982a.png)
