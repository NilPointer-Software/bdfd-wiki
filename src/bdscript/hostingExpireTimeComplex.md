# $hostingExpireTime[]
Returns your bot's hosting expiration date. If "yes" is provided, the function returns the expiration date in a UNIX timestamp.

## Syntax
``` 
$hostingExpireTime[Return unix timestamp?]
``` 

### Parameters
- `Return unix timestamp?` `(Type: Bool || Flag: Required)`: Whether to return the expiration date in a UNIX timestamp or not.

## Example
```
$nomention
I will be offline <t:$hostingExpireTime[yes]:R>
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    I will be offline <div class="discord-time-mark">In 4 years</div>
```
