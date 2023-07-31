# $awaitedCommandError
_Triggered when an awaited command doesn't match with provided filter._

`$awaitedCommandError[]` is a callback, which means it's used in the command trigger (not the code). The command is ran when an awaited command doesn't match with provided filter.

## Syntax
```
$awaitedCommandError[Name]
```

### Parameters
- `Name` `(Type: String || Flag: Required)`: The name used in the [`$awaitFunc[]`](../bdscript/awaitFunc.md) function.

## Example
**Trigger: `$awaitedCommandError[number]`**
```
$nomention
Invalid number!
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !number

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Provide a number!

- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    abc

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Invalid number!
```

> For more info, see the [Awaited Commands Guide](../guides/general/awaitedCommands.md).
