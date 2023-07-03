# $serverCooldown
Sets a server cooldown. After the command is used, no one in the server will be able to run the command until the `Duration` is up.

## Syntax
```
$serverCooldown[Duration;Error message]
```

### Parameters 
- `Duration` `(Type: Duration || Flag: Required)`: The duration of this cooldown.
- `Error message` `(Type: String || Flag: Emptiable)`: The error to return when the cooldown is still ongoing.
  
> 🧙‍♂️ You can use `%time%` to get how much time is left on the cooldown, in `Error message`.
