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
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
      Channel ID: 566370477967147018
```

```admonish note
It will return `none` if you use it in a DM:
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  bot: true
  verified: true
  content: |
      Channel ID: none
```

