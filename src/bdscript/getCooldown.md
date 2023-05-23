# $getCooldown
Returns how long is left on the cooldown, in seconds.

> 🧙‍♂️ This function can be used in the "Error message" field of cooldown functions.

## Syntax
```
$getCooldown[Cooldown type]
```

### Parameters
- `Cooldown type` `(Type: Enum || Flag: Required)`: The cooldown type. Cooldown types:
  - `normal` - [$cooldown](./cooldown.md)
  - `server` - [$serverCooldown](./serverCooldown.md)
  - `global` - [$globalCooldown](./globalCooldown.md)

## Example
```
$nomention
$cooldown[1h;You're on cooldown! (<t:$sum[$getTimestamp;$getCooldown[normal]]>)]
Hello World!
$c[This example should be used in BDScript 2 only.]
```
