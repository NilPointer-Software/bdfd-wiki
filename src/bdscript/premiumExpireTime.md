# $premiumExpireTime
Returns how long until premium expires.

> Returns "expired" if the bot is not premium.

## Syntax
```
$premiumExpireTime[(Return unix timestamp?)]
```

### Parameters 
- `Return unix timestamp?` `(Type: Bool || Flag: Optional)`: If "yes" is written, it will return the premium expiration value in UNIX timestamp and if "no", it will output as normal time format. Defaults to "no".

## Example
```
$nomention
My premium expires in: $premiumExpireTime (Unix Timestamp: $premiumExpireTime[yes])
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    My premium expires in: Mon, Nov 03 2025 12:02:09 UTC (Unix Timestamp: 1762171329)
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !bot
- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    My premium expires in: expired (Unix Timestamp: expired)
```
