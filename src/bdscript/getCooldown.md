# $getCooldown
Returns how long is left on the cooldown, in seconds; can be used in the 'errorMessage' field of cooldown functions.

## Usage
```
$getCooldown[cooldownType (normal/server/global)]
```

### Parameters
- `cooldownType` `(Type: Enum || Flag: Required)`: The cooldown type *(normal - [$cooldown](./cooldown.md) | server - [$serverCooldown](./serverCooldown.md) | global - [$globalCooldown](./globalCooldown.md))*.

## Example
```
$nomention
$cooldown[1h;You're on cooldown! (<t:$sum[$getTimestamp;$getCooldown[normal]]>)]
Hello World!
$c[This example should be used in BDScript 2 only.]
```
