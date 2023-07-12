# $globalCooldown
Applies a cooldown to the command, the user can not run the command in any server until the "Duration" is up. (Unlike `$cooldown`, which only applies the cooldown to the user in the current server)

## Syntax
```
$globalCooldown[Duration;Error message]
```

### Parameters
- `Duration` `(Type: Duration || Flag: Required)`: The duration until the user can use this command again.
- `Error message` `(Type: String || Flag: Emptiable)`: The message to return when the cooldown duration is still ongoing.

> 🧙‍♂️ You can use `%time%` in the "Error message" argument to get how much time is left until the cooldown is over.

## Example
```
$nomention
$globalCooldown[30s;$displayName, You are on cooldown for %time%!]

Hello $displayName!
```
![example](https://user-images.githubusercontent.com/111157596/233700254-d0162c40-8870-4976-bceb-c18fc7b7c0d4.gif)
