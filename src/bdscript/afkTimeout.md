# $afkTimeout
Returns the AFK time-out (in seconds) for a provided guild.

```admonish info title="Time-out"
Discord automatically moves member to the specified (in the Server Settings / Can be returned via [`$afkChannelID`](./afkChannelID)) voice channel and mute them when they have been idle for longer then the inactive time-out ("inactive time-out" can be returned via `$afkTimeout[]` function).
```

## Syntax
```
$afkTimeout[(Guild ID)]
```

### Parameters
- `Guild ID` `(Type: Snowflake || Flag: Required)`: The guild to get the AFK time-out.

## Example
```
$nomention
AFK Time-out: $afkTimeout[$guildID] seconds
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
    AFK Time-out: 300 seconds
```