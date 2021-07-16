# $argsCheck
When this function is used, the command can only be executed if the user’s message contains a certain amount of arguments (words).

## Usage
```
$argsCheck[how-many;error message]
```

### Breakdown
- `how-many` - How many arguments there should be in the user’s message.
> 🧙‍♂️ For example, if you want users to have 3 or more arguments in their message; you can use `>3`. If you want users to have less than 3 arguments in their message, you can use `<3`. If you want the users to have exactly 3 arguments in their message put `3`. 
- `error message` - The message that the bot will send if the user has too many/little arguments.

## Example
```
$argsCheck[>1;❌ Please provide something for me to say!]
$noMentionMessage
```
> 🧙‍♂️ This example, a *!say* command; only allows users to run the command if they provided 1 or more argument in their message. If they don't provide any arguments the bot returns “❌ Please provide something for me to say!”.
