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
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 566363823137882154
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    What do you want me to say?
```

```admonish info title="Read more"
For more information, read the the [Awaited Commands Guide](../guides/general/awaitedCommands.md).
```
