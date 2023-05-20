# $editChannelPerms
Changes permissions for the mentioned user/role in the provided channel.

## Syntax
```
$editChannelPerms[Channel ID;User/Role ID;Permission;...]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The ID of the channel where the role/user is being modified.
- `User/Role ID` `(Type: Snowflake || Flag: Emptiable)`: The ID of the role/user whose permissions will be modified.
- `Permission` `(Type: Permission || Flag: Required)`: The [permission(s)](../resources/permissions.md) to be modified. (e.g. `-sendmessages`)
  - `+` - set "+" to add the permission.
  - `-` - set "-" to remove the permission.

## Example
```
$nomention
$onlyPerms[managechannels;❌ You need the `MANAGE_CHANNELS` permission to use that!]

$editChannelPerms[$channelID;$mentionedRoles[1];-sendmessages]
✅ Now the role cannot send messages
```
![image](https://user-images.githubusercontent.com/42785890/153126133-42a80968-589a-4ff2-a871-19c614eceed9.png)
