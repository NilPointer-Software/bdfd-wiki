# $highestRole
Returns the ID of the user/server highest role (according to it's position on the [Role Hierarchy](/src/resources/troubleshooting/roleHierarchy.md)).

## Usage
```php
$highestRole[(userID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userID | The user to get the highest role of. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** If no `userID` is provided and `$highestRole` is used without brackets, then the current server's highest role is returned, rather than a user's highest role.

## Examples
### Example #1
```
$nomention
This server's highest role is: $roleName[$highestRole] ($highestRole)
```
![](https://user-images.githubusercontent.com/69215413/147858180-a9e9efc1-2760-4d90-a561-5f84633e2348.png)

### Example #2
```
$nomention
$username[$mentioned[1;yes]]'s highest role: $roleName[$highestRole[$mentioned[1;yes]]] ($highestRole[$mentioned[1;yes]])
```
![](https://user-images.githubusercontent.com/69215413/123514088-e90ac880-d65e-11eb-9e40-66dd3485b321.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*