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
![Without](https://user-images.githubusercontent.com/70456337/191593122-4fd47d30-f108-4b4a-b44b-b1f3b5df9980.png)


#### With an argument
Instead of `Slash command name` you must provide a valid slash command name.
The bot can only find its own global slash commands.
```
ID of `$message` slash command: $slashID[$message]
```
![With](https://user-images.githubusercontent.com/70456337/191593196-6ec89d57-a84c-47d8-b982-63aa3471b40d.png)

