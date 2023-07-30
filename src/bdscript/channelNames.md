# $channelNames
List all channel names separated by a given separator.

## Syntax
```
$channelNames[separator;(guild ID)]
```
### Parameters
- `seperator` `(Type: String || Flag: Emptiable)`: The separator used to separate the channel names.
- `guild ID` `(Type: Snowflake || Flag: Optional)`: The guild for which to return the channel names. _(Defaults to the current guild)_
## Example
```
$nomention
#$channelNames[ 
#]
```
``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example main-chat
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    #main-chat
    #media
    #suggestions
    #Category
```

> It can return names of the `category`, `channel`, `forum`.

