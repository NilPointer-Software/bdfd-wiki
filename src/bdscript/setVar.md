# $setVar
Sets a variable's value globally, or for a user globally.

## Usage
```
$setVar[variableName;newValue;(optional) userID]
```

### Breakdown
- `variableName` - The variable to update.
- `newValue` - The newly assigned variable value.
- `userID` - The user to globally assign the new value to. Sets the variable type as global-user, if 'userID' is present.

> 📝 Global variables has a max character limit of 499 (for premium users, it's 4999).

[See more in the Variables guide...](https://nilpointer-software.github.io/bdfd-wiki/guides/variables.html)
