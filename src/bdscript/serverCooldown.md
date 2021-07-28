# $serverCooldown
Sets a server cooldown. After the command is used, no one in the server will be able to run the command until the 'duration' is up.

## Usage
```
$serverCooldown[duration;errorMessage]
```

### Breakdown
- `duration` - The duration of this cooldown.
- `errorMessage` - The error to return when the cooldown is still ongoing.
  
> 🧙‍♂️ You can use `%time%` to get how much time is left on the cooldown, in 'errorMessage'.
