# $ban[]
Bans the mentioned user with a reason.

## Syntax
```
$ban[Reason]
```

### Parameters
- `Reason` `(Type: String || Flag: Emptiable)`: The reason for the ban, which will be saved in the audit-log.

## Example
```
$nomention
$ban[$noMentionMessage]
<@$mentioned[1]> was banned!
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example <@Spen> Too cute
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
      <@Spen> was banned!
- content: |
      <font color="white">Spen</font> left without pizza.
  type: leave
```
