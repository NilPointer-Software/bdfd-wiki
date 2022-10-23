# $userPerms
Returns an user's permissions.

## Syntax
```
$userPerms[User ID;Return amount;Separator]
```

### Parameters
- `User ID` : The user to get their permissions.
- `Return amount` : The no. of permissions to return. Use `-1` to return all.
- `Separator` : A text/character which is use for separating each permission.

## Example
```
$nomention
$userPerms[$mentioned[1;yes];-1;-]
```
![image](https://user-images.githubusercontent.com/42785890/151909707-d8e093f2-1279-4754-88a5-51466270fde6.png)
