# $cooldown
Sets a cooldown. The user can not run the command again, until the 'duration' is up.

## Syntax
```
$cooldown[Duration;Error message]
```

### Parameters
- `Duration` `(Type: Duration || Flag: Required)`: The duration of this cooldown.
- `Error message` `(Type: String || Flag: Emptiable)`: The message that is returned when the cooldown duration is still ongoing. `%time%` and other related functions can be used here.

| Time             | In Usage              | Limit 
| ---------------- | --------------------- | -------------
Year               | y                     | 191568
Week               | w                     | 9988936
Day                | d                     | 69922554
Hour               | h                     | 1678141301
Minute             | m                     | 100688478068
Second             | s                     | 6041308684139

> `%time%` returns how much time is left on the cooldown.

## Example
```
$nomention
$cooldown[30s;Please wait %time%, then use that command again!]
Hi!
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hi
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Please wait 27 Seconds, then use that command again!
```
\

> If you are using **BDScript 2**, then all functions above `$cooldown[]` will always work.
> 
> ❌ Not correct:
> ```
> $nomention
> $setUserVar[Money;$sum[$getUserVar[Money];5]]
> $sendMessage[You worked successfully and earned 5 🪙]
> $cooldown[30s;Please wait %time%, then use !work command again!]
> ```
> Your bot will always add 5🪙 to "Money" variable.
> 
> ✅ Correct:
> ```
> $nomention
> $cooldown[30s;Please wait %time%, then use !work command again!]
> $setUserVar[Money;$sum[$getUserVar[Money];5]]
> $sendMessage[You worked successfully and earned 5 🪙]
> ```
> How [`$setUserVar[]`](./findUser.md) and [`$sendMessage[]`](./sendMessage.md) works?

### Recommendation
You can also use these functions:
- [`$getCooldown[]`](./getCooldown.md)
- [`$serverCooldown[]`](./serverCooldown.md)
- [`$globalCooldown[]`](./globalCooldown.md)
