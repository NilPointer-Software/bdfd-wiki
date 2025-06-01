# $isBot
Returns whether the provided user is a bot or not.

> "true" means the user is a bot, "false" means they aren't.

## Syntax
```
$isBot[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Emptiable)`: The user to check.

## Example
```
$nomention
Bot?: $isBot[$mentioned[1]]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <@MineBarekSA>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Bot?: <code>false</code>
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <@BDFD Support>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Bot?: <code>true</code>
```
