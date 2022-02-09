# $editChannelPerms

Changes permission for mentioned users/roles in this particular channel.

## Usage
```
$editChannelPerms[channel ID;userID/RoleID;permission;...]
```

### Breakdown
- `channel ID` - place the ID of the channel to which the roles are modified.
- `userID/RoleID` - place the ID of the role or user whose permissions will be modified.
- `permission` - the permission(s) to be modified.
  - `+` - set + to add permission.
  - `-` - set - to remove the permission.

> 🧙🏻‍♂️ You can see the available permissions here in [Permissions](https://nilpointer-software.github.io/bdfd-wiki/resources/permissions.html)

## Example
```
$nomention
$onlyPerms[managechannels; ❌ You need the manage_channels permission to use that!]

$editChannelPerms[$channelID;$mentionedRoles[1];-sendmessages]
✅ Now the role cannot send messages
```
![image](https://user-images.githubusercontent.com/42785890/153126133-42a80968-589a-4ff2-a871-19c614eceed9.png)
