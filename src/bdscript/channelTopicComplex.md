# $channelTopic[]
Returns the topic of a channel by its ID.

## Syntax
```
$channelTopic[Channel ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel to return its topic.

## Example
```
$nomention
Channel Topic: $channelTopic[$mentionedChannels[1]]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <#media>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Channel Topic: Post cat pictures here!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <#secret>
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Channel Topic:
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    ⬆️ Returns empty value if no description.
```

```admonish question title="What is this?"
How [`$mentionedChannels[]`](./mentionedChannels.md) works?
```