# $takeRole
*(deprecated)*
> 🧙‍♂️ This command is deprecated instead better use [$roleGrant](./roleGrant.md)).

Removes a role to the provided user.

## Usages
There are two usages of the `$takeRole` function.

### Usage #1
```
$takeRole[userID;roleID]
```
Removes a role for the provided user.

#### Breakdown
- `userID` - The user to remove the role for.
- `roleID` - The role to remove from the user.

### Usage #2
```
$takeRole[roleID]
```
Removes the provided role from the mentioned user.

#### Breakdown
- `roleID` - The role to remove from the mentioned user.

## Example
```
$nomention
$onlyPerms[manageroles;Missing permissions!]
$takeRole[867492530463178803]
Removed $roleName[867492530463178803] from $username[$mentioned[1]]!
```

![example](https://user-images.githubusercontent.com/69215413/126550658-18a048dc-55ca-4b42-b176-5ad6900bf568.png)
