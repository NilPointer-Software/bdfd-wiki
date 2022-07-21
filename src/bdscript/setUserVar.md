# $setUserVar
Updates a variable's value for a user.

## Usage
```
$setUserVar[variableName;newValue;(userID;guildID)]
```

### Breakdown
- `variableName` - The variable to update.
- `newValue` - The newly assigned variable value.
- `userID` - The user to assign the new value to, uses the author if no 'userID' is provided.
- `guildID` - The guild to assign the new value to, uses current guild if no 'guildID' is provided.

> 📝 User variables value has a max character limit of 4999.

[See more in the Variables guide...](https://nilpointer-software.github.io/bdfd-wiki/guides/variables.html)
