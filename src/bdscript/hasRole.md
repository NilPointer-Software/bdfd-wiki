# $hasRole
Returns whether or not a user has the provided role.

> 🧙‍♂️ "true" means the user has the role, "false" means they don't.

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
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    true
```
