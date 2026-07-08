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

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Command used <discord-inline-code>1</discord-inline-code> times in this channel
```

```admonish info title="Read more"
For more information, read the [Variables Guide](../guides/introduction/variables.md).
```
