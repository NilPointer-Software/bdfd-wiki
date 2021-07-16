# $changeUsernameWithID
Changes a user's nickname using their ID.

## Usage
```
$changeUsernameWithID[userID;newNickname]
```

### Breakdown
- `userID` - The ID of the user which is getting their nickname changed.
- `newNickname` - The text to change the user's nickname to.

## Example
```
$changeUsernameWithID[$authorID;$message]
$argsCheck[>1;Please provide text!]
```
> 🧙‍♂️ This changes the author's nickname.
