# $getChannelVar
Returns the value of the provided channel variable.

## Syntax
```
$getChannelVar[Variable Name;(Channel ID)]
```

### Parameters
- `Variable Name` `(Type: String || Flag: Required)`: The name of the variable to get.
- `Channel ID` `(Type: Snowflake || Flag: Optional)`: The channel to get the value for. If no Channel ID is present, then the current channel will be used.
