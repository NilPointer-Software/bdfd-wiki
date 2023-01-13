# $changeUsernameWithID
Changes a user's nickname using their ID.
## Syntax
```
$changeUsernameWithID[user ID;new nickname]
```
## Parameters
- `user ID`: The user whose nickname will be changed.
- `new nickname`: The text to change the user's nickname to. 
> It cannot exceed more than 32 characters.
## Example
```
$nomention
$argsCheck[>1;Please provide text!]
$addCmdReactions[✅]
$changeUsernameWithID[$mentioned[1];$noMentionMessage]
```

![example](https://user-images.githubusercontent.com/113303649/212071851-992a7c9a-e817-4fdc-9f45-a62b7fa11bee.png)


