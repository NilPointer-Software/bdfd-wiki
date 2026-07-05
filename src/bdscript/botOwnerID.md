# $botOwnerID
Returns the bot owner's ID.

```admonish warning
Only works if you logged into the app via your Discord account. Otherwise, if you log in via your Google/Apple account or other methods, it will return `<unknown>`.
```

## Syntax
```
$botOwnerID
```

## Example
```
$nomention
My owner's ID: $botOwnerID
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 566363823137882154
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    My owner's ID: 803569638084313098
```
