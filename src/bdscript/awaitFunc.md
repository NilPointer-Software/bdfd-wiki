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
![example](https://user-images.githubusercontent.com/113303649/212294420-acf01905-c9f5-4673-99f0-375f9d786f25.png)

> For more info, see the [Awaited Commands Guide](../guides/general/awaitedCommands.md).
