# $message
Returns the user's message *(without the command trigger)*.

## Usages
There are two usages of the the `$message` function.

### Usage #1
```
$message
```
Returns the user's message.

### Usage #2
```
$message[argumentNumber]
```
Returns the argument matching the provided number.
- For example, `$message[1]` would just return the first word of the message.
- You can also use `$message[>]` to get the last argument/word of the user's message.

### Optimization
Find info about optimizing `$message[]` for slash commands [here](/src/guides/slashCommands.md#retrieving-value-from-options).
