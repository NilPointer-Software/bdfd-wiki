# $serverCooldown
Sets a server cooldown. After the command is used, no one in the server will be able to run the command until the `time` is up.

## Usage
```$serverCooldown[time;error message]```

## Example Command

 ```$serverCooldown[30s;Please wait %time%!]```
  
## What's %time%?
%time% returns the how much time is left on the cooldown. You can also use:
- %time-s% - Seconds
- %time-m% - Minutes
- %time-h% - Hours
- %time-d% - Days

The above allow you to return how much time is left in seconds, minutes, hours, etc. These can be custimzed using $changeCooldownTime.
