# $awaitFunc
Used to initiate an awaited command.

## Syntax
```
$awaitFunc[Name;(User ID;Channel ID)]
```

### Parameters
- `Name` `(Type: String || Flag: Required)`: The name used inside the [`$awaitedCommand[]`](../callbacks/awaitedCommand.md) and [`$awaitedCommandError[]`](../callbacks/awaitedCommandError.md) callbacks.
- `User ID` `(Type: Snowflake || Flag: Vacantable)`: The user the awaited command will trigger for. Uses command author, if `User ID` is not present.
- `Channel ID` `(Type: Snowflake || Flag: Optional)`: The channel where the command will be awaited. Uses current channel, if `Channel ID` is not present.

## Example
```
$nomention
What do you want me to say?
$awaitFunc[say]
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !say

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    What do you want me to say?

- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    I love BDFD!

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    I love BDFD!
```


> For more info, see the [Awaited Commands Guide](../guides/general/awaitedCommands.md).
