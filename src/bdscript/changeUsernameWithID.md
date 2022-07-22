# $changeUsernameWithID
Changes a user's nickname using their ID.

## Usage
```
$changeUsernameWithID[userID;newNickname]
```

### Breakdown
- `userID` - The ID of the user which is getting their nickname changed.
- `newNickname` - The text to change the user's nickname to. It cannot exceed more than 32 characters.

## Example
```
$argsCheck[>1;Please provide text!]
$changeUsernameWithID[$authorID;$message]
```
> 🧙‍♂️ This changes the author's nickname.
