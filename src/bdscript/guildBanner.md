# $guildBanner
Returns the banner of the guild. 

## Syntax
```
$guildBanner[(Guild ID)]
```

### Parameters
- `Guild ID` `(Type: Snowflake || Flag: Required)`: The guild to get the banner.

## Example
```
$nomention
$guildBanner[$guildID]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 566363823137882154
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: <none>
  attachments: 
  - url: https://cdn.discordapp.com/banners/566363823137882154/a8cd6ed3d5c665e1443e5fe8fa2ab8c8.jpg
```

```admonish question title="What is this?"
How [`$guildID`](./guildID.md) works?
```