# $setVar
Sets a variable's value globally, or for a user globally.

## Syntax
```
$setVar[Variable name;New value;(User ID)]
```

### Parameters 
- `Variable name` `(Type: String || Flag: Required)`: The variable to update.
- `New value` `(Type: String || Flag: Emptiable)`: The new variable value.
- `User ID` `(Type: Snowflake || Flag: Optional)`: The user to globally assign the new value to. Sets the variable type as global-user, if "User ID" is present.

> 📝 Global variable values have a max character limit of **499** *(for premium users, it's **4999**)*.

> For more info, see the [Variables Guide](../guides/introduction/variables.md).
