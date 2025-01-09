# $banID[]
Bans a user using their ID.

## Syntax
```
$banID[Reason;(User ID)]
```

### Parameters
- `Reason` `(Type: String || Flag: Emptiable)`: The reason for the ban, which will be saved in the audit-log. Reason must not exceed more than 512 characters.

```admonish tip
Use [`$getBanReason[]`](./getBanReason.md) to get the ban reason.
```

- `User ID` `(Type: Snowflake || Flag: Vacantable)`: The user to ban. If empty, the ID will be taken from the last part of the author's message.

## Example
```
$nomention
<@$mentioned[1]> was banned!
$banID[$noMentionMessage;$mentioned[1]]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 854665455527526421 Hello!
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <@Chilli> was banned!
- content: |
      <font color="white">Chilli</font> left without pizza.
  type: leave
```

```admonish question title="What is this?"
How [`$mentioned[]`](./mentioned.md) and [`$noMentionMessage`](./noMentionMessage.md) works?
```
