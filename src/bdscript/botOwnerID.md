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
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !example
- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    My owner's ID: 729343563401265193
```
