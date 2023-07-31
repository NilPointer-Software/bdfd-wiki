# $checkUserPerms
Returns "true" if a user has all of the provided permissions, otherwise "false" is returned.

## Syntax
```
$checkUserPerms[User ID;Permissions]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user that the bot checks the permissions for.
- `Permissions` `(Type: Permission || Flag: Required)`: The [permissions](../resources/permissions.md) that the bot checks for. Separate permissions using `;`.

## Example
```
$nomention
$onlyIf[$checkUserPerms[$authorID;admin]==false;You can't use this command, because you are an administrator.] 
You aren't an admin!
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !example

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    You can't use this command, because you are an administrator.
```
