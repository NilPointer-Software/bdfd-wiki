# $giveRole
Adds a role to the provided user.

## Usages
There are two usages of the `$giveRole` function.

### Usage #1
```
$giveRole[userID;roleID]
```
> Gives a role to the provided user.

#### Breakdown
`userID` - The user to give the role to.

`roleID` - The role to give the user.

### Usage #2
```
$giveRole[roleID]
```
> Gives the provided role to the mentioned user.

#### Breakdown
`roleID` - The role to give the mentioned user.

## Example
```
$onlyPerms[manageroles;Missing permissions!]
$giveRole[807004801753284618]
Added $roleName[807004801753284618] to $username[$mentioned[1]]!
```

![example](https://user-images.githubusercontent.com/69215413/123468942-6e8b6b80-d5c0-11eb-9102-afc48b70f622.png)
