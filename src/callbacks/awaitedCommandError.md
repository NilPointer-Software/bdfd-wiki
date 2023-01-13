# $awaitedCommandError
_Triggered when an awaited command doesn't match with provided filter._

`$awaitedCommandError[]` is a callback, which means it's used in the command trigger (not the code). The command is ran when an awaited command doesn't match with provided filter.

## Syntax
```
$awaitedCommandError[name]
```

## Parameters
- `name`: The name used in [`$awaitFunc[]`](../bdscript/awaitFunc.md) function.

## Example
**Trigger: `$awaitedCommandError[number]`**
```
$nomention
Invalid number!
```
![example](https://user-images.githubusercontent.com/113303649/212291974-4efa0531-d896-4aa3-ac1a-b8fa7d6794d0.png)
> For more info, see the [Awaited Commands Guide](../guides/awaitedCommands.md).
