# $getChannelVar
Returns the value of the provided channel variable.

## Syntax
```
$getChannelVar[Variable name;(Channel ID)]
```

### Parameters
- `Variable name` `(Type: String || Flag: Required)`: The name of the variable to get.
- `Channel ID` `(Type: Snowflake || Flag: Optional)`: The channel to get the value for. If no "Channel ID" is present, then the current channel will be used.

## Example
```
$nomention
Command used `$getChannelVar[Uses]` times in this channel
```
![example](https://user-images.githubusercontent.com/113303649/202900351-9c03ef8a-f4d1-417e-96a8-9da6b3fb9e16.png)

> For more info, see the [Variables Guide](../guides/introduction/variables.md).
