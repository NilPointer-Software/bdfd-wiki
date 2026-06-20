# $getUserStatus
Returns the provided user's status/presence.

```admonish fail title="Privileged Intents"
This function requires the following privileged intents:
- [`Presences Intent`](../guides/introduction/gatewayIntents.md#presence-intent)
```

## Syntax
```
$getUserStatus[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to get the status for.

#### Possible Outputs
- `online`: 🟢 Online
- `dnd`: 🔴 Do not disturb
- `idle`: 🟡 Idle
- `offline`: ⚫ Offline

## Example
```
$nomention
Your status is: `$getUserStatus[$authorID]`
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
    Your status is: <code>dnd</code>
```

```admonish question title="What is this?"
How [`$authorID`](./authorID.md) works?
```
