# $onlyForIDs
The command can only be executed by the provided users.

## Syntax
```
$onlyForIDs[User IDs;...;Error message]
```

### Parameters 
- `User IDs` `(Type: Snowflake || Flag: Emptiable)`: The users that can use this command. Use semicolons `;` as a separator to separate multiple user IDs.
- `Error message` `(Type: String || Flag: Emptiable)`: The error message that is returned, when the user running the command is not whitelisted.

## Example
```
$nomention
$onlyForIDs[$botOwnerID;❌ You are not my owner!]
$eval[$message]

$c[This can only be executed in BDScript 2.]
```
```discord yaml
- user_id: 1081869405245407262
  username: mrskraba101
  color: "#E67E22"
  content: |
    !example Hello!
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    ❌ You are not my owner!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Hello!
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hello!
```
