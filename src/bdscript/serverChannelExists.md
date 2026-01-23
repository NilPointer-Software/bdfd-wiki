# $serverChannelExists
Checks if the channel exists in the current server.

## Syntax
```
$serverChannelExists[Channel]
```

### Parameters 
- `Channel` `(Type: Snowflake, String || Flag: Emptiable)`: Returns "true" if the channel exists, otherwise "false" is returned.

## Example
```
$nomention
Exists?: $serverChannelExists[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 566370477967147018
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Exists?: true
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example dhjejemxndj
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Exists?: false
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```