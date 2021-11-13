# $getCooldown
Returns how long is left on the cooldown, in seconds; can be used in the 'errorMessage' field of cooldown functions.

## Usage
```
$getCooldown[cooldownType (normal/server/global)]
```

### Breakdown
- `cooldownType` - The cooldown type *(`normal` - $cooldown | `server` - $serverCooldown | `global` - $globalCooldown)*.

## Example
```
$nomention
$cooldown[1h;You're on cooldown! (<t:$sum[$getTimestamp;$getCooldown[type]]>)]
Hello World!
$c[This example should be used in BDScript 2 only.]
```
