# $serverOwner[]
Returns the ID of the provided server's owner.

## Syntax
```
$serverOwner[Guild ID]
```

### Parameters 
- `Guild ID` `(Type: Snowflake || Flag: Required)`: The server to get the owner ID for.

> The bot must be present in the server in order to get the server owner ID.

## Example
```
$nomention
This server is owned by <@$serverOwner[$guildID]>!
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
    This server is owned by <@RainbowKey>!
  highlight: true
```
