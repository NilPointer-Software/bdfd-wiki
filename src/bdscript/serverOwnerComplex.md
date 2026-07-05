# $serverOwner[]
Returns the ID of the provided server's owner.

## Syntax
```
$serverOwner[Guild ID]
```

### Parameters 
- `Guild ID` `(Type: Snowflake || Flag: Required)`: The server to get the owner ID for.

```admonish warning
The bot must be present in the server in order to get the server owner ID.
```

## Example
```
$nomention
This server is owned by <@$serverOwner[$guildID]>!
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    This server is owned by <@Kuba>!
```

```admonish question title="What is this?"
How [`$guildID`](./guildID.md) works?
```
