# $banID[]
Bans a user using their ID.

## Syntax
```
$banID[Reason;(User ID)]
```

### Parameters
- `Reason` `(Type: String || Flag: Emptiable)`: The reason for the ban, which will be saved in the audit-log.
   > Use [`$getBanReason[]`](./getBanReason.md) to get the ban reason.
- `User ID` `(Type: Snowflake || Flag: Vacantable)`: The user to ban. If empty, the ID will be taken from the last part of the author's message.

## Example
```
$nomention
$onlyAdmin[You need the `admim` permission to use that command!]
$argsCheck[>1;Please provide a `user`. Syntax: `!ban (user) <reason>`]
$onlyIf[$findUser[$message[1];no]!=;Failed to find user!]
<@$findUser[$message;no]> was banned!
$banID[$replaceText[$message;$message[1];;1];$findUser[$message[1];no]]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example 854665455527526421 Hello!
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
