# $botTyping
This function tells Discord that the bot is typing.

<style>
.discord-messages:first-of-type > .discord-message:after {
    user-select: none;
    -webkit-user-select: none;
    margin-left: .5rem;
    font-size: 10px;
    content: '••• BDFD Support is typing...';
}
</style>

## Syntax
```
$botTyping
```

```admonish info
Using `$botTyping` will add a 2-3 second delay before your bot’s response, simulating the typing process.
```

## Example
```
$nomention
$botTyping
Hello $username!
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
```

- Command completed:

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
    Hello RainbowKey!
```
