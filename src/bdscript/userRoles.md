# $userRoles
Returns all role names given to the user.

## Syntax
```
$userRoles[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user for whom to return the role names.

## Example
```
$nomention
$description[<@$mentioned[1;yes]>'s roles: 
$userRoles[$mentioned[1;yes]]]
```
![example](https://user-images.githubusercontent.com/69215413/125122358-4e30d600-e0c3-11eb-8930-07276f1bfbbd.png)
