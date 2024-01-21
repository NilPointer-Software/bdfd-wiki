# $blackListRolesIDs
Blocks users with certain roles from using the command. If the user has any role in the blacklist, they will not be able to run the command.

## Syntax
```
$blackListRolesIDs[Role IDs;...;Error message]
```

### Parameters
- `Role IDs` `(Type: Snowflake || Flag: Emptiable)`: The role(s) that will be blacklisted. Use semicolons `;` as a separator to separate multiple role IDs.
- `Error message` `(Type: String || Flag: Emptiable)`: The message that will be sent if the user has a role from the blacklist.

## Example
```
$nomention
$blackListRolesIDs[1009019299987476540;1014547313957539901;❌ You can't use this command!]
Pong! $ping ms
```


```discord yaml
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
      ❌ You can't use this command!
- user_id: 437154602626973697
  username: Kito
  avatar: https://github.com/Rainb0wKey/bdfd-wiki/assets/113303649/5d649ade-b7d9-471f-84d0-8cc36b4fa76e
  color: "#4365ab"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
      Pong! 4 ms
```
