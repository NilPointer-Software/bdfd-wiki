# $lowestRole
Returns the ID of the user/server lowest role (according to it's position on the [Role Hierarchy](/src/resources/troubleshooting/roleHierarchy.md)).

## Usage
```php
$lowestRole[(userID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userID | The user to get the lowest role of. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** If no `userID` is provided and `$lowestRole` is used without brackets, then the server's lowest role is returned, rather than a user's lowest role.

## Examples
### Example #1
```
$nomention
This server's lowest role is: $roleName[$lowestRole] ($lowestRole)
```
![](https://user-images.githubusercontent.com/69215413/147861344-4d242193-35bb-4776-928b-ac6bb0a0b4b4.png)

### Example #2
```
$nomention
$username[$mentioned[1;yes]]'s lowest role: $roleName[$lowestRole[$mentioned[1;yes]]] ($lowestRole[$mentioned[1;yes]])
```
![](https://user-images.githubusercontent.com/69215413/123518995-a523bd80-d676-11eb-94ce-3c08fa888464.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*