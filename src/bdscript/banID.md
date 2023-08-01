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
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example 854665455527526421
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
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
