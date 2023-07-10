# $setChannelVar
Updates a variable's value for a channel.

## Syntax
```
$setChannelVar[Variable name;New value;(Channel ID)]
```

### Parameters
- `Variable name` `(Type: String || Flag: Required)`: The variable to update.
- `New value` `(Type: String || Flag: Emptiable)`: The new variable value.
- `Channel ID` `(Type: Snowflake || Flag: Optional)`: The channel to assign the new value to. If no "Channel ID" is present, the current channel will be used.

> 📝 Channel variable values have a max character limit of **499** *(for premium users, it's **4999**)*.

> For more info, see the [Variables Guide](../guides/introduction/variables.md).
