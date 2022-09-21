# $slashID
Returns ID of provided slash command.

## Usage №#1
```
$slashID
```
## Usage #2
```
$slashID[Slash command name]
```

### Examples

#### Without an argument
Without an argument, returns the ID of the slash command you just executed.
Can only be used inside a slash command, otherwise an error will be returned.
```
ID of this slash command: $slashID
```
...

#### With an argument
Instead of `Slash command name` you must provide a valid slash command name.
The bot can only find its own global slash commands.
```
ID of `$message` slash command: $slashID[$message]
```
...
