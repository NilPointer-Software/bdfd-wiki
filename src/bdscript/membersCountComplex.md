# $membersCount[]
Returns the amount of members in the current guild with provided presence.

## Syntax 
```
$membersCount[Presence]
```

### Parameters
- `Presence` `(Type: Enum || Flag: Required)`: Returns the amount of members that have their presences set. Presence types:
  - `online` 
  - `offline`
  - `idle`
  - `dnd`
  - `invisible`

### Privileged Intents
This function requires the following privileged intents:
- [`Presences intent`](../guides/gatewayIntents.md#presence-intent)

## Example 
```
$nomention 
There are $membersCount[online] online users in this server!
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
    There are 67 online users in this server!
```