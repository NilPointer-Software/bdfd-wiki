# $channelExists
Checks if the provided channel exists in any server the bot is in.

## Syntax
```
$channelExists[Channel ID]
```

### Parameters
- `Channel ID` `(Type: String, Snowflake || Flag: Emptiable)`: The channel which the bot will check for.

## Example
```
$nomention
$channelExists[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 566370477967147018
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    true
```
