# $lowestRole
Returns the ID of the users/servers lowest role (according to it's position).

## Usages
There are two usages of the `$lowestRole` function.

### Usage #1
```
$lowestRole
```
> Returns the lowest role in the server.

### Usage #2
```
$lowestRole[userID]
```
> Returns the user's lowest role.

## Example
```
$nomention
$username[$mentioned[1;yes]]'s lowest role: $roleName[$lowestRole[$mentioned[1;yes]]] ($lowestRole[$mentioned[1;yes]])
```

![example](https://user-images.githubusercontent.com/69215413/123518995-a523bd80-d676-11eb-94ce-3c08fa888464.png)
