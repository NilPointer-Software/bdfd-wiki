# $getUserStatus
Returns the provided user's status/presence.

> 🧙‍♂️ The user must share atleast 1 server with the bot, for this function to work.

## Syntax
```
$getUserStatus[User ID]
```

> The different statuses this function will return are: `online`, `dnd`, `idle` and `offline`.

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to get the status for.

### Privileged Intents
This function requires the following privileged intents:
- [`Presences Intent`](../guides/introduction/gatewayIntents.md#presence-intent)

## Example
```
$nomention
$nickname[$mentioned[1;yes]]'s status is: $getUserStatus[$mentioned[1;yes]]
```

![example](https://user-images.githubusercontent.com/69215413/124503888-68517800-dd94-11eb-93e5-c0eea7d8b055.png)
