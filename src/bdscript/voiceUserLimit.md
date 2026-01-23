# $voiceUserLimit
Returns the user limit of the provided voice channel.

## Syntax
```
$voiceUserLimit[(Voice Channnel ID)]
```

### Parameters
- `Voice Channnel ID` `(Type: Snowflake || Flag: Optional)`: What is the voice channel to get the user limit.

## Example
```
$nomention
Voice User Limit: $voiceUserLimit[$mentionedChannels[1]]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <#voice-1>
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Voice User Limit: 0
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    ⬆️ No limits
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example <#general>
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Voice User Limit: 99
```

```admonish question title="What is this?"
How [`$mentionedChannels[]`](./mentionedChannels.md) works?
```

```admonish tip
You can use `$voiceUserLimit[]` (without parameters) only in the **voice chat**.
```
