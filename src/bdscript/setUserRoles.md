# $setUserRoles
Overrides all roles of the given user.

## Syntax
```
$setUserRoles[User ID;Role ID;...]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: ID of the user to set the role.
- `Role  ID` `(Type: Snowflake || Flag: Required)`: Roles to be given to the user. Separate roles using `;`.

## Example
1. Create two commands and set the trigger `!example` for one command and `!roles` for the other. (`!roles` is not required)
- Code with trigger `!example`:

```
$nomention
$setUserRoles[$authorID;$roleID[Support]]
We've reset all your roles! Now you have "Support" role.
```

- Code with trigger `!roles`:

```
$nomention
$userRoles[$authorID]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  content: |
    !roles
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
      Cool
      BDFD
      Moderator
- user_id: 803569638084313098
  username: RainbowKey
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
      We've reset all your roles! Now you have "Support" role.
- user_id: 803569638084313098
  username: RainbowKey
  content: |
    !roles
- user_id: 1009018156494368798
  username: BDFD Support
  bot: true
  verified: true
  content: |
      Support
```

*In this example, we will remove all roles and give one role with "Support" name*.

```admonish question title="What is this?"
How [`$roleID[]`](./roleID.md), [`$authorID`](./authorID.md) and [`$userRoles[]`](./userRoles.md) works?
```
