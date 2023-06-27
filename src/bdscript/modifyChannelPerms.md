# $modifyChannelPerms
*(deprecated)*

> 🧙‍♂️ This command is deprecated, instead better use [`$editChannelPerms[]`](./editChannelPerms.md).

Modifies a channel's permissions.

## Syntax
```
$modifyChannelPerms[Channel ID;Permissions;User/Role ID]
```

### Parameters 
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel to change the permissions for.
- `Permissions` `(Type: Permission || Flag: Required)`: The [permissions](../resources/permissions.md) to add/remove. `+` means allow, `-` means deny, `/` means neutral permission.
- `User/Role ID` `(Type: Snowflake || Flag: Required)`: The role or user to modify the permissions for. Use `$guildID` for *@everyone*.

## Example
**Lock:**
```
$nomention
$onlyPerms[managechannels;❌ You need the manage_channels permission to use that!]
✅ Successfully locked <#$mentionedChannels[1;yes]>!
$modifyChannelPerms[$mentionedChannels[1;yes];-sendmessages;$guildID]
```

![example1](https://user-images.githubusercontent.com/69215413/123529809-19d01980-d6c2-11eb-9cc6-c9c9d559c5cb.png)

**Unlock:**
```
$nomention
$onlyPerms[managechannels;❌ You need the manage_channels permission to use that!]
✅ Successfully unlocked <#$mentionedChannels[1;yes]>!
$modifyChannelPerms[$mentionedChannels[1;yes];+sendmessages;$guildID]
```

![example2](https://user-images.githubusercontent.com/69215413/123529818-33716100-d6c2-11eb-99d9-c9f04399287a.png)
