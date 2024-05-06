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
$onlyPerms[ban;You need the `ban` permission to use that command!]
<@$findUser[$message;no]> was banned!
$banID
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 854665455527526421
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <@Chilli> was banned!
- content: |
      <font color="white">Chilli</font> left without pizza.
  type: leave
```

> [How `$findUser[]` works?](./findUser.md)
