# $highestRoleWithPerms
Returns the highest role in the server that has all the provided permissions.

## Usage
```php
$highestRoleWithPerms[permission;...]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| permissions | The permissions that the role must have. | [Permission](/src/resources/arguments/types.md#permission) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
Highest Role with Administrator:  $roleName[$highestRoleWithPerms[admin]] ($highestRoleWithPerms[admin])
```
![](https://user-images.githubusercontent.com/69215413/123514351-a4802c80-d660-11eb-9ff1-3270e561982a.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*