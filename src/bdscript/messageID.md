# $messageID
Returns the ID of the author's message.

```admonish info
If this function is written in [`$onInteraction`](../callbacks/onInteraction.md) or [`$onInteraction[]`](../callbacks/onInteractionComplex.md) callbacks, it will return the bot's message ID.
```

## Syntax
```
$messageID
```

## Example
```
$nomention
Message ID: `$messageID`
```

``` discord yaml
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
    Message ID: <code>1446827813184208896</code>
```