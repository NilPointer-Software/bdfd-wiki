# $guildExists
Checks if the provided guild/server exists.

> Returns `true` if the server exists. Returns `false` if the server doesn't exist or the bot isn't present in the provided server.

## Syntax
```
$guildExists[Guild ID]
```

### Parameters
- `Guild ID` `(Type: Snowflake, String || Flag: Emptiable)`: The ID of the hypothetical server.

## Example
```
$nomention
$guildExists[$message[1]]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 566363823137882154
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    true
```
