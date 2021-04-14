# $message
Returns the user's message without the command trigger. By default `$message` replaces mentions within the message to regular text, you can use `$allowMention` to disable this.

## Usages
• There are 2 usages for the `$message` command.

#### Usage #1
`$message` - Returns the user's message.

#### Usage #2
`$message[argument number]` - Returns the argument matching the provided number.
- For example, `$message[1]` would just return the first word of the message.
- You can also use `$message[>]` to get the last argument/word of the user's message.

### Optimization
Find info about optimizing `$message[]` for slash commands [here](https://nilpointer-software.github.io/bdfd-wiki/slashCommands.html#retriving-value-from-options).
