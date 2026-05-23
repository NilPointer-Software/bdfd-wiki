# $shardID[]
Returns the shard ID of the provided guild.

## Syntax
```
$shardID[Guild ID]
```

### Parameters 
- `Guild ID` `(Type: Snowflake || Flag: Required)`: The guild to get it's shard ID.

## Example
```
$nomention
Shard: $shardID[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 566363823137882154
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Shard: 2
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```

```admonish info title="Read more"
For more information, read the ["Sharding" article](../resources/sharding.md).
```