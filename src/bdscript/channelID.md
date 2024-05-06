# $channelID
Returns the ID of the current channel.

## Syntax
```
$channelID
```
## Example
```
$nomention
Channel ID: $channelID
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
      Channel ID: 566370477967147018
```

> It will return `none` if you use it in a DM.
```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  content: |
    !example
- username: BDFD Support
  bot: true
  verified: true
  content: |
      Channel ID: none
```

