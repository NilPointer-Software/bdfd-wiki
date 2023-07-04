# $giveRole 
*(deprecated)*

> 🧙‍♂️ This command is deprecated, instead better use [`$roleGrant[]`](./roleGrant.md).

Adds a role to the provided user.

## Syntax
```
$giveRole[User/Role ID;(Role ID)]
```

### Parameters
- `User/Role ID` `(Type: Snowflake || Flag: Required)`: The user to add the specified role to **or** the role to add to the mentioned users. If only this parameter is provided, it will be read as "Role ID".
- `Role ID` `(Type: Snowflake || Flag: Optional)`: The role to add to the user. If this parameter is used, it reads the first parameter as "User ID".

## Examples
### Example #1
```
$nomention
$onlyPerms[manageroles;Missing permissions!]

$giveRole[807004801753284618]
Added $roleName[807004801753284618] to $username[$mentioned[1]]!
```
![example1](https://user-images.githubusercontent.com/69215413/123468942-6e8b6b80-d5c0-11eb-9102-afc48b70f622.png)

### Example #2
```
$nomention
$onlyPerms[manageroles;Missing permissions!]
$trimContent

$giveRole[$mentioned[1];$message[2]]
Added the role **$roleName[$message[2]]** to **$username[$mentioned[1]]**!
```
![example2](https://user-images.githubusercontent.com/111157596/250921826-a2a32410-a9da-4609-bee7-4076b8951e8b.png)

## Related Resources
- [`$roleGrant[]`](./roleGrant.md)
- [`$takeRole[]`](./takeRole.md)
