# $globalCooldown
Applies a cooldown to the command, the user can not run the command in any server until the 'duration' is up. (Unlike `$cooldown`, which only applies the cooldown to the user in the current server)

## Usage
```
$globalCooldown[duration;errorMessage]
```

### Parameters
- `duration` `(Type: Duration || Flag: Required)`: The duration until the user can use this command again.
- `errorMessage` `(Type: String || Flag: Emptiable)`: The message to return when the cooldown duration is still ongoing.

> 🧙‍♂️ You can use `%time%` to get how much time is left until the cooldown is over, in the 'errorMessage'.
