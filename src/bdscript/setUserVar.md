# $setUserVar
Updates a variable's value for a user.

## Syntax
```
$setUserVar[variableName;newValue;(userID;guildID)]
```

### Parameters 
- `variableName` `(Type: String || Flag: Required)`: The variable to update.
- `newValue` `(Type: String || Flag: Emptiable)`: The newly assigned variable value.
- `userID` `(Type: Snowflake || Flag: Optional)`: The user to assign the new value to, uses the author if no 'userID' is provided.
- `guildID` `(Type: Snowflake || Flag: Optional)`: The guild to assign the new value to, uses current guild if no 'guildID' is provided.

> 📝 User variables value has a max character limit of 4999.

[See more in the Variables guide...](https://nilpointer-software.github.io/bdfd-wiki/guides/variables.html)
