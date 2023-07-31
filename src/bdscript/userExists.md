# $userExists
Checks if a user exists in Discord using thier ID. Returns "true" if the user exists, otherwise "false" is returned.

## Syntax
```
$userExists[User ID]
```

### Parameters
- `User ID` `(Type: String, Snowflake || Flag: Required)`: The ID of the user to check.

## Example
```
$nomention
$userExists[$mentioned[1]]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example <@Spen>
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    true
```
