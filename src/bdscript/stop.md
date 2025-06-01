# $stop
Stops the command execution. Works with "If Statements" and "Error Handling" functions.

```admonish danger title="BDScript 2"
Can only be used in **[BDScript 2](../guides/general/bds2/aboutBDScript2.md)**.
```

## Syntax
```
$stop
```

## Example
```
$nomention
$try
  $calculate[$message]
$catch
  $stop
$endtry
Expression: $message
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example a+5
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 6+10
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    16
    Expression: 6+10
```
*As we can see, the bot did not send "Expression: a+5" when we tried to use "`!example a+5`".*

```admonish question title="What is this?"
How [`$calculate[]`](./calculate.md), [`$message`](./message.md), [`$try`](./try.md), [`$endtry`](./endtry.md) and [`$catch`](./catch.md) works?
```

```admonish info title="Read more"
For more information, read the [Error Handling guide](../guides/general/bds2/errorHandling.md) or [If Statements guide](../guides/general/ifStatements.md).
```
