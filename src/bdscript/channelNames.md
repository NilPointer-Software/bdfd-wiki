# $channelNames
List all channel names separated by a given separator.

## Syntax
```
$channelNames[Separator;(Guild ID)]
```
### Parameters
- `Seperator` `(Type: String || Flag: Emptiable)`: The separator used to separate the channel names.
- `Guild ID` `(Type: Snowflake || Flag: Optional)`: The guild for which to return the channel names. _(Defaults to the current guild)_
## Example
```
$nomention
#$channelNames[ 
#]
```
``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example main-chat
- username: BDFD Support
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

