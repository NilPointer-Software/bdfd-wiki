# $changeUsernameWithID
Changes a user's nickname using their ID.

## Usage
```
$changeUsernameWithID[userID;Username]
```

### Parameters
- `userID` `(Type : Snowflake || Flag : Required)` : The ID of the user whose nickname will be changed.
- `Username` `(Type : String || Flag : Required)` : The text to change the user's nickname to. It cannot exceed more than 32 characters, using `%username%` will be replaced by real user's username.

## Example
```
$argsCheck[>1;Please provide text!]
$changeUsernameWithID[$authorID;$message]
```
> 🧙‍♂️ This changes the author's nickname.
