# $channelPosition[]
Returns the position of a given channel using its ID.

## Syntax
```
$channelPosition[Channel ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The ID of a channel whose position will be returned.
> [How to get a channel ID guide.](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)
## Example
```
$nomention
Channel Position: $channelPosition[$mentionedChannels[1]]
```

```discord yaml
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
    Channel Position: 2
```

```admonish question title="What is this?"
How [`$mentionedChannels[]`](./mentionedChannels.md) works?
```
