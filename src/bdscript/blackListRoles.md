# $blackListRoles
Blocks users with certain role(s) from using the command. If the user has any role in the blacklist, they will not be able to run the command. Uses role names instead of role IDs.

## Syntax
```
$blackListRoles[Role names;...;Error message]
```

### Parameters
- `Role names` `(Type: String || Flag: Emptiable)`: The name(s) of the role(s) to blacklist. Use semicolons `;` as a separator to separate multiple role names.
- `Error message` `(Type: String || Flag: Emptiable)`: The message that will be sent if the user has a role from the blacklist.

## Example
```
$nomention
$blackListRoles[Owner;Bot;❌ You can't use this command!]
Pong! $ping ms
```

```discord yaml
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
      ❌ You can't use this command!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    Because I have a role with name "Owner".
- user_id: 437154602626973697
  username: Kito
  color: "#4365ab"
  content: |
    !example
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
      Pong! 2 ms
```
