# $noMentionMessage
Returns the user's full message without any mentions *(without the command trigger)*.

## Syntax
```
$noMentionMessage
```

## Example
```
$nomention
Message: $noMentionMessage
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Hello <@MineBartekSA>!
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hello !
```

- Lets use [`$message`](./message.md) instead of `$noMentionMessage`:

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Hello <@MineBartekSA>!
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hello @MineBartekSA!
```
