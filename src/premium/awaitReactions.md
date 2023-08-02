# $awaitReactions
*(for premium bots)*

This function is used to await a reaction.

## Syntax
```
$awaitReactions[<Command name;Reaction>;...]
```

### Parameters
- `Command name` `(Type: String || Flag: Required)`: The name which will be used inside the `$reaction[]` callback.
- `Reaction` `(Type: Emoji || Flag: Required)`: The reaction to await. The reaction must be either a Unicode Emoji or a Discord custom emoji id.

## Example
```
$nomention
Yes or no?
$awaitReactions[✅;yes;❌;no]
$addReactions[✅;❌]
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !reactions

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Yes or No?
  reactions:
    - emoji: https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Twemoji12_2705.svg/640px-Twemoji12_2705.svg.png
      name: ":white_check_mark:"
      count: 1
    - emoji: https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Twemoji2_274c.svg/640px-Twemoji2_274c.svg.png
      name: ":x:"
      count: 1
```

> For more info, see the [Awaited Reactions Guide](../premium/awaitedReactions.md).
