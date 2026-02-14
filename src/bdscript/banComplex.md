# $ban[]
Bans the mentioned user with a reason.

## Syntax
```
$ban[Reason]
```

### Parameters
- `Reason` `(Type: String || Flag: Emptiable)`: The reason for the ban, which will be saved in the audit-log. Reason must not exceed more than 512 characters.

```admonish tip
Use [`$getBanReason[]`](./getBanReason.md) to get the ban reason.
```

## Example
```
$nomention
$ban[$noMentionMessage]
<@$mentioned[1]> was banned!
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <@Spen> Too cute
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
      <@Spen> was banned!
- content: |
      <font color="white">Spen</font> left without pizza.
  type: leave
```

```admonish question title="What is this?"
How [`$noMentionMessage`](./noMentionMessage.md) and [`$mentioned[]`](./mentioned.md) works?
```

