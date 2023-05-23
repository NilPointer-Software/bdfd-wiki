# $getCooldown
Returns how long is left on the cooldown, in seconds.

> 🧙‍♂️ This function can be used in the "Error message" field of cooldown functions.

## Syntax
```
$getCooldown[Cooldown type (normal/server/global)]
```

### Parameters
- `Cooldown type` `(Type: Enum || Flag: Required)`: The type of the cooldown. Cooldown types:
  - `normal` - Normal cooldown ([`$cooldown`](./cooldown.md))
  - `server` - Server cooldown ([`$serverCooldown`](./serverCooldown.md))
  - `global` - Global cooldown ([`$globalCooldown`](./globalCooldown.md))

## Example
```
$nomention
$cooldown[1h;You're on cooldown! (<t:$sum[$getTimestamp;$getCooldown[normal]]>)]
Hello World!
$c[This example should be used in BDScript 2 only.]
```
