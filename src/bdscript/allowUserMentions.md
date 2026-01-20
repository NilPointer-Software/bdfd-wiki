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
Hi <@390515191819010058>! I mentioned you, but you didn't get pinged.
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hi <@Kuba>! I mentioned you, but you didn't get pinged.
- user_id: 390515191819010058
  username: kubastick
  color: "#FF0000"
  content: |
    Wow really! No notification 😎
```
