# $hasRole
Returns whether or not a user has the provided role.

> "true" means the user has the role, "false" means they don't.

## Syntax
```
$hasRole[User ID;Role ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to check for the role.
- `Role ID` `(Type: Snowflake || Flag: Emptiable)`: The role that the bot is checking the user for.

## Example
```
$nomention
$hasRole[$authorID;858376972303204362]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    true
```
