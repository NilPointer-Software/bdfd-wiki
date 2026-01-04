# $nickname
Returns the nickname of the author of the message.

```admonish info
Nickname means the user's server nickname. If the user doesn't have a nickname then their display name is returned instead.
```

## Syntax
```
$nickname
```

## Example
```
$nomention
Your nickname is `$nickname`!
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
    Your nickname is <code>RainbowKey</code>!
```
