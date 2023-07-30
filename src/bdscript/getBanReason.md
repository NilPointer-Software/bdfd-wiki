# $getBanReason[]
Gets the user's ban reason.


## Syntax
```
$getBanReason[User ID;(Guild ID)]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: User to get the ban reason for
- `Guild ID` `(Type: Snowflake || Flag: Optional)`: The server id from which to get the ban reason.


## Example
```
$nomention
Ban Reason: $getBanReason[154148273307910144]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  color: "#b9a0e0"
  bot: true
  content: |
    Ban Reason: Too cute
```
