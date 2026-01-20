# $emoteCount
Returns the number of emojis (static and animated) in the current server.

## Syntax
```
$emoteCount
```

## Example
```
$nomention
There are $emoteCount emojis in $serverName[$guildID]!
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
    There are 149 emojis in Bot Designer for Discord Official Server!
```

```admonish question title="What is this?"
How [`$serverName[]`](./serverName.md) and [`$guildID`](./guildID.md) works?
```
