# $blackListUsers
Blocks certain users from using the command. Uses usernames instead of user IDs.

## Syntax
```
$blackListUsers[Usernames;...;Error message]
```

### Parameters
- `Usernames` `(Type: String || Flag: Emptiable)`: The username(s) to blacklist. Use semicolons `;` as a separator to separate multiple usernames.
- `Error message` `(Type: String || Flag: Emptiable)`: The message that will be sent when the username of the user running the command is blacklisted.

## Example
```
$nomention
$blackListUsers[RainbowKey;❌ You can't use this command!]
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
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    Because my username is "RainbowKey".
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
      Pong! 3 ms
```
