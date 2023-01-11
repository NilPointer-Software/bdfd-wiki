# $setServerVar
Updates a variable value for a server.

## Usage
```
$setServerVar[variableName;newValue;(serverID)]
```

### Parameters 
- `variableName` `(Type : String || Flag : Required)` : The variable to update.
- `newValue` `(Type : String || Flag : Emptiable)` : The newly assigned variable value.
- `serverID` `(Type : Snowflake || Flag : Optional)` : The server to assign the new value to, uses current server if no 'serverID' is provided.

> 📝 Server variables values has a max character limit of 499 _(for premium users, it's 4999)_.

[See more in the Variables guide...](https://nilpointer-software.github.io/bdfd-wiki/guides/variables.html)
