# $awaitFunc
Used to initiate an awaited command.

## Syntax
```
$awaitFunc[name;(user ID;channel ID)]
```

### Parameters

- `name` `(Type: String || Flag: Required)` : The name used inside [`$awaitedCommand[]`](../callbacks/awaitedCommand.md) and [`$awaitedCommandError[]`](../callbacks/awaitedCommandError.md) callbacks.
- `user ID` `(Type: Snowflake || Flag: Vacantable)` : The user the awaited command will trigger for. Uses command author, if `user ID` is not given. _(Optional)_
- `channel ID` `(Type: Snowflake || Flag : Optional)` : The channel where the command will be awaited. Uses current channel, if `channel ID` is not given. _(Optional)_


## Example
```
$nomention
What do you want me to say?
$awaitFunc[say]
```
![example](https://user-images.githubusercontent.com/113303649/212294420-acf01905-c9f5-4673-99f0-375f9d786f25.png)

> For more info, see the [Awaited Commands Guide](../guides/awaitedCommands.md).

