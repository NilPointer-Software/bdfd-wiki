# $dmChannelID
Retrieves the DM channel ID for the provided user id.

## Syntax
```
$dmChannelID[User ID]
```
### Parameters
- `user ID` `(Type: Snowflake || Flag: Required)`: The user for whom to fetch the DM channel ID

## Example
```
$nomention
ID: $dmChannelID[$authorID]
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
    ID: 1011919618610311189
```
