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
Admin perms?: $checkUserPerms[$authorID;admin]
```

``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Admin perms?: false
- user_id: 1262009115689881702
  username: GettingBeatenByKito
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Admin perms?: true
```

```admonish question title="What is this?"
How [`$authorID`](./authorID.md) works?
```
