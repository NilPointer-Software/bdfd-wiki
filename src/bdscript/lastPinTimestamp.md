# $lastPinTimestamp
Returns the last pinned message timestamp in the current channel.

## Syntax
```
$lastPinTimestamp
```

```admonish tip title="Timestamp Converter"
You can use our ["Timestamp Converter" tool](../tools/timestamp.md) to work with unixtime!
```

## Example
```
$nomention
Last Pin Timestamp: $lastPinTimestamp
```

```discord yaml
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
    Last Pin Timestamp: 1753454520
```
