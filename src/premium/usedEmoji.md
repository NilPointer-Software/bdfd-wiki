# $usedEmoji
<div class="functionTags">
  <span id="PremiumTag">Premium</span>
</div>

This function returns the emoji which triggered a [`$reaction[]`](./reaction.md) callback.

```admonish warning
This function can only be used inside a [`$reaction[]`](./reaction.md) callback.
```

## Syntax
```
$usedEmoji
```

## Example
```
$nomention
$sendMessage[Emoji: $usedEmoji]
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
    Yes or No?
  reactions:
    - emoji: https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Twemoji12_2705.svg/640px-Twemoji12_2705.svg.png
      name: ":white_check_mark:"
      count: 2
      reacted: true
    - emoji: https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Twemoji2_274c.svg/640px-Twemoji2_274c.svg.png
      name: ":x:"
      count: 1

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Emoji: ✅
```

```admonish info title="Read more"
For more information, read the the  [Awaited Reactions Guide](./awaitedReactions.md).
```