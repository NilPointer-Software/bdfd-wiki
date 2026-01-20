# $getCooldown
Returns how long is left on the cooldown, in seconds.

```admonish note
This function can be used in the "Error message" field of cooldown functions.
```

## Syntax
```
$getCooldown[Cooldown type]
```

### Parameters
- `Cooldown type` `(Type: Enum || Flag: Required)`: The type of the cooldown. Cooldown types:
  - `normal` - Normal cooldown ([`$cooldown`](./cooldown.md))
  - `server` - Server cooldown ([`$serverCooldown`](./serverCooldown.md))
  - `global` - Global cooldown ([`$globalCooldown`](./globalCooldown.md))

## Example
```
$nomention
$cooldown[1h;You're on cooldown! (<t:$sum[$getTimestamp;$getCooldown[normal]]:R>)]
Hello world!
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hello world!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    You're on cooldown! (<div class="discord-time-mark">In 1 hour</div>)
```

```admonish question title="What is this?"
How [`$cooldown[]`](./cooldown.md), [`$sum[]`](./sum.md) and [`$getTimestamp`](./getTimestamp.md) works?
```
