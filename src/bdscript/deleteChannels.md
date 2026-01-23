# $deleteChannels
Deletes the provided channel(s).

## Syntax
```
$deleteChannels[Channel IDs;...]
```

### Parameters
- `Channel IDs` `(Type: Snowflake || Flag: Required)`: The channels to delete. Use semicolons `;` as a separator to separate multiple channel IDs.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `managechannels`

## Example
```
$nomention
Successfully deleted #$channelName[$mentionedChannels[1]]
$deleteChannels[$mentionedChannels[1]]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <#main-chat>
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

```admonish question title="What is this?"
How [`$channelName[]`](./channelName.md) and [`$mentionedChannels[]`](./mentionedChannels.md) works?
```
