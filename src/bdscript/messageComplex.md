# $message[]

## Syntax
```
$message[argument number]
```

### Parameters 
- `argument number` `(Type: HowMany, String || Flag: Required)`: Returns the argument matching the provided number.
- For example, `$message[1]` would just return the first word of the message.
- You can also use `$message[>]` to get the last argument/word of the user's message.

### Optimization
Find info about optimizing `$message[]` for slash commands [here](../guides/slashCommands.md#retrieving-value-from-options).
