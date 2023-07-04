# $takeRole
*(deprecated)*

> 📌 As of December 2021, this function has been deprecated in favor of [`$roleGrant[]`](./roleGrant.md).
>
>  📌 In order to remove a role from a user, the bot must have the `manageroles` permission.

Removes a role from the provided/mentioned user.

## Syntax
```
$takeRole[User/Role ID;(Role ID)]
```

### Parameters
- `User/Role ID` `(Type: Snowflake || Flag: Required)`: The user to remove the specified role from **or** the role to remove from the mentioned users. If only this parameter is provided, it will be read as "Role ID".
- `Role ID` `(Type: Snowflake || Flag: Optional)`: The role to remove from the user. If this parameter is used, it reads the first parameter as "User ID".

## Examples
### Example #1
```
$nomention
$allowRoleMentions[]

$takeRole[$mentionedRoles[1]]
Removed <@&$mentionedRoles[1]> from the mentioned users!
```
![example1](https://user-images.githubusercontent.com/95774950/198837013-a39c8a69-29aa-4cec-b319-0b04365c200d.png)

### Example #2
```
$nomention
$allowMention
$allowRoleMentions[]

$takeRole[$message[1];$mentionedRoles[1]]
Removed the role <@&$mentionedRoles[1]> from <@$message[1]>!
```
![example2](https://user-images.githubusercontent.com/111157596/250922731-73a8a86d-d5ba-4cbf-a4cd-87f13440eeea.png)\
![example2](https://user-images.githubusercontent.com/111157596/250922753-4db7473e-a85a-43d3-b88b-f97e0e869533.png)

## Related Resources
- [`$roleGrant[]`](./roleGrant.md)
- [`$giveRole[]`](./giveRole.md)
