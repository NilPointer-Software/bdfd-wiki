# $changeUsernameWithID
Changes a user's nickname using their ID.

## Syntax
```
$changeUsernameWithID[User ID;New nickname]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The ID of the user whose nickname will be changed.
- `New nickname` `(Type: String || Flag: Required)`: The text to change the user's nickname to. It cannot exceed more than 32 characters, using `%username%` will be replaced by real user's username.

## Example
```
$nomention
$argsCheck[>1;Please provide text!]
$addCmdReactions[❤️]
$changeUsernameWithID[$message[1];$message[2]]
```
``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 154148273307910144 Owner
  reactions:
    - emoji: https://upload.wikimedia.org/wikipedia/commons/7/70/Symbolic_Love_Heart.png
      count: 1
      reacted: false
```

> [How `$addCmdReactions[]` works?](./addCmdReactions.md)
