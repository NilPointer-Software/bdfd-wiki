# $rolePerms
Returns the given roles permissions

## Syntax
```
$rolePerms[Guild ID;Role ID;(Separator)]
```

### Parameters
- `Guild ID` `(Type: Snowflake || Flag: Required)`: The guild where the role is.
- `Role ID` `(Type: Snowflake || Flag: Required)`: The ID of the role.
- `Separator`: `(Type: String || Flag: Optional)`: The separator to use while separating the permissions. (default: ",")

## Example
```
$nomention
$rolePerms[$guildID;$mentionedRoles[1];#]
```

**Without Perms**
``` discord yaml
- username: Ivaylo
  user_id: 1251981607468798089
  color: "#E67E22"
  content: |
    !example <@not-so-cool role>
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    No Permissions
```

**With Perms**
``` discord yaml
- username: Ivaylo
  user_id: 1251981607468798089
  color: "#E67E22"
  content: |
    !example <@cool role>
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    CreateInvite# KickMembers# BanMembers# ManageChannels
```

```admonish question title="What is this?"
How [`$mentionedRoles`](./mentionedRoles.md) works?
```