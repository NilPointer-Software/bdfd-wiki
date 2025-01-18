# $getUserStatus
Returns the provided user's status/presence.

## Syntax
```
$getUserStatus[User ID]
```

> The different statuses this function will return are: `online`, `dnd`, `idle` and `offline`.

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to get the status for.

```admonish fail title="Privileged Intents"
This function requires the following privileged intents:
- [`Presences Intent`](../guides/introduction/gatewayIntents.md#presence-intent)
```

## Example
```
$nomention
My status is: `$getUserStatus[$authorID]`
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    My status is: <code>dnd</code>
```

```admonish question title="What is this?"
How [`$authorID`](./authorID.md) works?
```
