# $highestRoleWithPerms
Returns the highest role in the server that has all the provided permissions.

## Usage
```
$highestRoleWithPerms[permissions]
```

### Parameters
- `permissions` `(Type: Permission || Flag: Required)`: The permissions that the role needs to have.  [(see permissions list)](/src/resources/permissions.md)

## Example
```
$nomention
Highest Role with Administrator:  $roleName[$highestRoleWithPerms[admin]] ($highestRoleWithPerms[admin])
```

![example](https://user-images.githubusercontent.com/69215413/123514351-a4802c80-d660-11eb-9ff1-3270e561982a.png)
