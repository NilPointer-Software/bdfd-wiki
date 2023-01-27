# $changeUsernameWithID
Changes a user's nickname using their ID.
## Syntax
```
$changeUsernameWithID[user ID;new nickname]
```
### Parameters
- `user ID`: The user whose nickname will be changed.
- `new nickname`: The text to change the user's nickname to. 
> It cannot exceed more than 32 characters.
## Example
```
$nomention
$argsCheck[>1;Please provide text!]
$addCmdReactions[✅]
$changeUsernameWithID[$findUser[$message[1]];$message[2]]
```

![example](https://user-images.githubusercontent.com/113303649/212552342-49a8cd00-cf8c-40c7-abc6-08805d9fc9af.png)

> [How `$findUser[]` works?](./findUser.md)
