# $setServerVar
Updates a variable's value for a server.

## Syntax
```
$setServerVar[Variable name;New value;(Server ID)]
```

### Parameters 
- `Variable name` `(Type: String || Flag: Required)`: The variable to update.
- `New value` `(Type: String || Flag: Emptiable)`: The new variable value.
- `Server ID` `(Type: Snowflake || Flag: Optional)`: The server to assign the new value to. Uses the current server if no "Server ID" is provided.

> 📝 Server variable values have a max character limit of **499** _(for premium users, it's **4999**)_.

> For more info, see the [Variables Guide](../guides/introduction/variables.md).
