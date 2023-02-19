# $takeRole
Removes a role from the provided/mentioned user.

> 📌 As of December 2021, this function has been deprecated in favor of [$roleGrant](./roleGrant.md).
>
>  📌 In order to remove a role from a user, the bot must have the `manageroles` permission.

## Syntax
```
$takeRole[User/Role ID;(Role ID)]
```

### Parameters
- `User/Role ID` `(Type: Snowflake || Flag: Required)`: The user to remove the role from or the role to remove from the mentioned users. If this parameter is only provided, it reads as "Role ID".
- `Role ID` `(Type: Snowflake || Flag: Optional)`: The role to remove from the user. If this parameter is used, it reads the first parameter as "User ID".

## Example
```
$nomention
$allowRoleMentions[]

$takeRole[$mentionedRoles[1]]
Removed <@&$mentionedRoles[1]> from the mentioned users!
```
![Screenshot_20221029_193751](https://user-images.githubusercontent.com/95774950/198837013-a39c8a69-29aa-4cec-b319-0b04365c200d.png)

## Related Resources
- [$roleGrant](./roleGrant.md)
- [$giveRole](./giveRole.md)
