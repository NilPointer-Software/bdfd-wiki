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
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hi <@Spen>! I mentioned you, but you didn't get pinged.
```
