# $message[]

## Syntax
```
$message[Argument number]
```

### Parameters 
- `Argument number` `(Type: HowMany, String || Flag: Required)`: Returns the argument matching the provided number.

> 🧙‍♂️ For example, `$message[1]` would just return the first word of the message. You can also use `$message[>]` to get the last argument/word of the user's message.

### Optimization
Find info about optimizing `$message[]` for slash commands [here](../guides/slashCommands.md#retrieving-value-from-options).

## Example
```
$nomention
First word: $message[1]
Second word: $message[2]
Third word: $message[3]
```
![example](https://user-images.githubusercontent.com/111157596/231827506-1436330e-1231-4eb6-97df-e2218f29ac26.png)
