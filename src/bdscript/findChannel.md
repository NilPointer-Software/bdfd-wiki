# $findChannel
Finds a channel's ID from the given channel name, ID, or mention.

> This function can only find channels of **the current** server.

## Syntax
```
$findChannel[Channel]
```

### Parameters
- `Channel` `(Type: String || Flag: Emptiable)`: The channel name/ID/mention to find.

## Example
```
$nomention
Channel ID: $findChannel[$mentionedChannels[1]]
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
    Channel ID: 566370477967147018
```

```admonish question title="What is this?"
How [`$mentionedChannels[]`](./mentionedChannels.md) works?
```
