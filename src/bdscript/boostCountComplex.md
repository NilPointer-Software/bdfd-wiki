# $boostCount[]
Returns a guild's number of nitro boosts.

## Syntax
```
$boostCount[Guild ID]
```

### Parameters
- `Guild ID` `(Type: Snowflake || Flag: Required)`: The guild to get the number of boosts for.

## Example
```
$nomention
This server currently has $boostCount[$message[1]] boost(s).
```

```discord yaml
- type: boost
  content: |
    <discord-bold>RainbowKey</discord-bold> just boosted the server!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 566363823137882154
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    This server currently has 38 boost(s).
```
