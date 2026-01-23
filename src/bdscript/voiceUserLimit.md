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
Voice User Limit: $voiceUserLimit[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 611281459080331274
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
    !example 827255538705236019
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Voice User Limit: 99
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```

```admonish tip
You can use `$voiceUserLimit[]` (without parameters) only in the **voice chat**.
```
