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
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example 154148273307910144 Owner
  reactions:
    - emoji: https://upload.wikimedia.org/wikipedia/commons/7/70/Symbolic_Love_Heart.png
      count: 1
      reacted: false
```

> [How `$addCmdReactions[]` works?](./addCmdReactions.md)
