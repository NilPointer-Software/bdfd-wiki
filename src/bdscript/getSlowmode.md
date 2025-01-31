# $getSlowmode
Returns the channel's slowmode time (In Seconds).

```admonish tip title="Change slowmode time"
To change the slowmode time in the channel use [`$slowmode[]`](./slowmode).
```

## Syntax
```
$getSlowmode[(Channel ID)]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Optional)`: The channel to get the slowmode time

## Example
```
$nomention
Slowmode time: $getSlowmode[$channelID] seconds
```

```discord yaml
- user_id: 1262009115689881702
  username: GettingBeatenByKito
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Slowmode time: 0 seconds
- user_id: 1262009115689881702
  username: GettingBeatenByKito
  color: "#E67E22"
  content: |
    This means there is no slowmode set in this channel.
```

```admonish question title="What is this?"
How [`$channelID`](./channelID.md) works?
```
