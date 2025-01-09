# $banID
Bans a user using their ID without reason.
The user ID will be taken from the last part of the author's message.

## Syntax
```
$banID
```

## Example
```
$nomention
<@$findUser[$message;no]> was banned!
$banID
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 854665455527526421
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
How [`$findUser[]`](./findUser.md) and [`$message`](./message.md) works?
```
