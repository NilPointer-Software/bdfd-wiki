# $changeUsernameWithID
Changes a user's nickname using their ID.
## Syntax
```

$changeUsernameWithID[user ID;new nickname]
```

### Parameters
- `user ID` `(Type : Snowflake || Flag : Required)` : The ID of the user whose nickname will be changed.
- `new nickname` `(Type : String || Flag : Required)` : The text to change the user's nickname to. It cannot exceed more than 32 characters, using `%username%` will be replaced by real user's username.


## Example
```
$nomention
$argsCheck[>1;Please provide text!]
$addCmdReactions[✅]
$changeUsernameWithID[$findUser[$message[1]];$message[2]]
```

![example](https://user-images.githubusercontent.com/113303649/212552342-49a8cd00-cf8c-40c7-abc6-08805d9fc9af.png)

> [How `$findUser[]` works?](./findUser.md)


