# $getBotInvite
Returns the bot's invite URL.

## Syntax
```
$getBotInvite
```

```admonish note title="Invitation perms can be configured in the BDFD App:"
1. Select the bot,
2. Click "➤ Invite bot to server" button,
3. Select "🔓 Edit invite link permissions",
4. Pick permissions
```

## Example
```
$nomention
Invite Me! $getBotInvite
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 390515191819010058
  username: kubastick
  color: "#378afa"
  bot: true
  content: |
    Invite Me! <a href="https://discordapp.com/oauth2/authorize?client_id=390515191819010058&scope=bot&permissions=2146958847">https://discordapp.com/oauth2/authorize?client_id=390515191819010058&scope=bot&permissions=2146958847</a>
```

```admonish example
The invitation link in **this** example is fake, so it doesn’t work.
```
