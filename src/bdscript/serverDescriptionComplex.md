# $serverDescription[]
Returns the server's description of provided guild ID. Returns an empty result if the server has no description.

## Syntax
```
$serverDescription[Guild ID]
```

### Parameters
- `Guild ID` `(Type: Snowflake || Flag: Required)`: The server from which to get the description.

## Example
```
$nomention
Server description: $serverDescription[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 1009018669982031912
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Server description: Welcome to the BDFD Support server! Enjoy stay with us!
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```
