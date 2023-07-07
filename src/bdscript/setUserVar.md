# $setUserVar
Updates a variable's value for a user.

## Syntax
```
$setUserVar[Variable name;New value;(User ID;Guild ID)]
```

### Parameters 
- `Variable name` `(Type: String || Flag: Required)`: The variable to update.
- `New value` `(Type: String || Flag: Emptiable)`: The new variable value.
- `User ID` `(Type: Snowflake || Flag: Optional)`: The user to assign the new value to. Uses the author if no "User ID" is provided.
- `Guild ID` `(Type: Snowflake || Flag: Optional)`: The guild to assign the new value to. Uses the current guild if no "Guild ID" is provided.

> 📝 User variable values have a max character limit of **4999**.

> For more info, see the [Variables Guide](../guides/introduction/variables.md).
