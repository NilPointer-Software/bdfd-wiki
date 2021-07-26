# $lowestRoleWithPerms
Returns the lowest role in the server that has all the provided permissions.

## Usage
```
$lowestRoleWithPerms[permissions]
```

### Breakdown
- `permissions` - The permissions that the role needs to have.  [(see permissions list)](https://nilpointer-software.github.io/bdfd-wiki/guides/permissions.html)

## Example
```
$nomention
Lowest Role with Administrator:  $roleName[$lowestRoleWithPerms[admin]] ($lowestRoleWithPerms[admin])
```

![example](https://user-images.githubusercontent.com/69215413/123529558-7c73e600-d6bf-11eb-9716-9f217ac1bac0.png)
