# $lowestRole[]
Returns the ID of the provided user's lowest role (according to it's position).

## Syntax
```
$lowestRole[User ID]
```
### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user for which to return the lowest role.

## Example
```
$nomention
$username[$mentioned[1;yes]]'s lowest role: $roleName[$lowestRole[$mentioned[1;yes]]] ($lowestRole[$mentioned[1;yes]])
```
![example](https://user-images.githubusercontent.com/69215413/123518995-a523bd80-d676-11eb-94ce-3c08fa888464.png)
