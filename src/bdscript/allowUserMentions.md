# $allowUserMentions
Enables user pings only for the provided user IDs, while the user not provided will be "fake pinged" *(the user will be pinged, but user will not be notified)*.

## Syntax
```
$allowUserMentions[User IDs;...]
```

### Parameters
- `User IDs` `(Type: Snowflake || Flag: Emptiable)`: The user(s) that can be pinged, leave empty to disable pings for every user. Separate user IDs using `;`.

## Example
```
$nomention
$allowUserMentions[]
Hi <@696368083517964288>! I mentioned you, but you didn't get pinged.
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hi <@Spen>! I mentioned you, but you didn't get pinged.
```
