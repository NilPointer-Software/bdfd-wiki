# $highestRole[]
Returns the ID of the provided user's highest role (according to it's position).

## Syntax
```
$highestRole[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user for which to return the highest role.

## Example
```
$nomention
$username[$mentioned[1;yes]]'s highest role: $roleName[$highestRole[$mentioned[1;yes]]] ($highestRole[$mentioned[1;yes]])
```
![example](https://user-images.githubusercontent.com/69215413/123514088-e90ac880-d65e-11eb-9e40-66dd3485b321.png)
