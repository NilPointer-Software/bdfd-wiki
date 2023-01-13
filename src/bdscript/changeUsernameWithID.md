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
$changeUsernameWithID[$mentioned[1];$noMentionMessage]
```

![example](https://user-images.githubusercontent.com/113303649/212071851-992a7c9a-e817-4fdc-9f45-a62b7fa11bee.png)





