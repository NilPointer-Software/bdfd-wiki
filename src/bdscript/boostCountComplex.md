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
Boosts: $boostCount[$message]
```

```discord yaml
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
  content: |
    Boosts: 38
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```
