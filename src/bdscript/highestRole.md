# $highestRole
Returns the ID of the users/servers highest role (according to it's position).

## Usages
There are two usages of the `$highestRole` function.

### Usage #1
```
$highestRole
```
Returns the highest role in the server.

### Usage #2
```
$highestRole[userID]
```
Returns the user's highest role.

## Example
```
$nomention
$username[$mentioned[1;yes]]'s highest role: $roleName[$highestRole[$mentioned[1;yes]]] ($highestRole[$mentioned[1;yes]])
```

![example](https://user-images.githubusercontent.com/69215413/123514088-e90ac880-d65e-11eb-9e40-66dd3485b321.png)
