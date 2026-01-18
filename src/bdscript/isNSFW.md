# $isNSFW
Returns whether the provided channel is NSFW (Not Safe For Work) or not.

```admonish info
"true" means the channel is NSFW, "false" means it isn't.
```

## Syntax
```
$isNSFW[Channel ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel to check.

## Example
```
$nomention
Is this channel NSFW?: `$isNSFW[$channelID]`
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    NSFW Channel 🤫
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is this channel NSFW?: <code>true</code>
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    It's a main chat here!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is this channel NSFW?: <code>false</code>
```

```admonish question title="What is this?"
How [`$channelID`](./channelID.md) works?
```
