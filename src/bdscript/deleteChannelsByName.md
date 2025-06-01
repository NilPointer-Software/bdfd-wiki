# $deleteChannelsByName
Deletes all channels matching the names provided.

## Syntax
```
$deleteChannelsByName[Channel name;...]
```

### Parameters
- `Channel name` `(Type: String || Flag: Required)`: The name(s) of the channel(s) to delete. Use semicolons `;` as a separator to separate multiple channel names.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `managechannels`

## Example
```
$nomention
Successfully deleted #$channelName[$channelID[$message]]!
$deleteChannelsByName[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example main-chat
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
      Successfully deleted #main-chat
  ```
\
![example](https://github.com/Rainb0wKey/bdfd-wiki/assets/113303649/6479e1dd-da03-431a-85e8-1f8ff18bf84c)

> How [`$channelName[]`](./channelName.md) and [`$channelID[]`](./channelIDComplex.md) works?
