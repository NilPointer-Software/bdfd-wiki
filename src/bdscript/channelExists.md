# $channelExists
Checks if the provided channel exists in any server the bot is in.

## Syntax
```
$channelExists[Channel ID]
```

### Parameters
- `Channel ID` `(Type: String, Snowflake || Flag: Emptiable)`: The channel which the bot will check for.

## Example
```
$nomention
$channelExists[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example 566370477967147018
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    true
```
