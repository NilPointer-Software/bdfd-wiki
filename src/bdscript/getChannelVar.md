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
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Command used `1` times in this channel
```

> For more info, see the [Variables Guide](../guides/introduction/variables.md).
