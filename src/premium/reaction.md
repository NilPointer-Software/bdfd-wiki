# $reaction
*(for premium users)*

This is a [callback](../callbacks/introduction.md). It gets triggered whenever an awaited reaction occurs.

## Syntax
```
$reaction[Name]
```

### Parameters
- `Name` `(Type: String || Flag: Required)`: The value used in "command name" argument of `$awaitReactions[]`.

## Example
### Trigger `$reaction[click]`
```
$nomention
$sendMessage[$username clicked on the reaction]
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
    Click
  reactions:
    - emoji: https://cdn.discordapp.com/emojis/766607515445231637.webp
      count: 2
      reacted: true

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Nicky clicked on the reaction
```

> For more info, see the [Awaited Reactions Guide](../premium/awaitedReactions.md).
