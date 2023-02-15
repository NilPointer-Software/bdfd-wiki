# Awaited Commands

Awaited commands are a special type of command where the bot waits for the user's response.

## Content
[**Functions Used**](#functions-used) > [**Supported Filters**](#supported-filters) > [**$awaitFunc[]**](#awaitfunc) > [**$awaitedCommand[]**](#awaitedcommand) > [**$awaitedCommandError[]**](#awaitedcommanderror) > [**Creating an awaited command**](#creating-an-awaited-command)

## Functions Used
- [`$awaitFunc[]`](../bdscript/awaitFunc.md)
- [`$awaitedCommand[]`](../callbacks/awaitedCommand.md)
- [`$awaitedCommandError[]`](../callbacks/awaitedCommandError.md)

## Supported Filters
- `<numeric>`: Accepts only number input.
- `<word1/word2/...>`: Accepts only specified words provided inside `<>`. Use `/` as a separator for multiple words.

# $awaitFunc
Used to initiate an awaited command.

## Syntax
```
$awaitFunc[name;(user ID;channel ID)]
```

### Parameters
- `command name` `(Type: String || Flag: Required)`: The name used inside [`$awaitedCommand[]`](#awaitedcommand) and [`$awaitedCommandError[]`](#awaitedcommanderror) callbacks.
- `user ID` `(Type: Snowflake || Flag: Vacantable)`: The user the awaited command will trigger for. Uses command author, if `user ID` is not given.
- `channel ID` `(Type: Snowflake || Flag: Optional)`: The channel where the command will be awaited. Uses current channel, if `channel ID` is not given.

## Example
```
$nomention
What do you want me to say?
$awaitFunc[say]
```
![example](https://user-images.githubusercontent.com/113303649/212294420-acf01905-c9f5-4673-99f0-375f9d786f25.png)


# $awaitedCommand
_Triggered when an awaited command gets responded to._

`$awaitedCommand[]` is a callback, which means it's used in the command trigger (not the code). The command is only run when an awaited command gets responded to.

## Syntax
```
$awaitedCommand[name;(filter)]
```

### Parameters
- `name`: The name used in [`$awaitFunc[]`](#awaitfunc) function.
- `filter`: Used to limit user input. [Supported Filters](#supported-filters)

## Example
### Without filter
**Trigger: `$awaitedCommand[say;]`**
```
$nomention
$message
```
![example](https://user-images.githubusercontent.com/113303649/212084980-10ab6f01-5595-454f-bfe6-a23f8fd64c1e.png)
### With choose filter
**Trigger: `$awaitedCommand[odd;<yes/no/cancel>]`**
```
$nomention
$if[$message==yes]
   Your answer is correct!
$elseif[$message==no]
   Your answer is incorrect!
$elseif[$message==cancel]
   Command cancelled!
$endif
```
![example](https://user-images.githubusercontent.com/113303649/212088333-54a94584-f854-45cf-8b7e-6980aa370764.png)
### With numeric filter
**Trigger: `$awaitedCommand[odd;<numeric>]`**
```
$nomention
You have provided a number: $message
```
![example](https://user-images.githubusercontent.com/113303649/212089433-e998259a-0e74-4401-9140-a7ea4c6c3776.png)

# $awaitedCommandError
_Triggered when an awaited command doesn't match with provided filter._

`$awaitedCommandError[]` is a callback, which means it's used in the command trigger (not the code). The command is only run when an awaited command doesn't match with provided filter.

## Syntax
```
$awaitedCommandError[name]
```

### Parameters
- `name`: The name used in [`$awaitFunc[]`](#awaitfunc) function.

## Example
**Trigger: `$awaitedCommandError[number]`**
```
$nomention
Invalid number!
```
![example](https://user-images.githubusercontent.com/113303649/212291974-4efa0531-d896-4aa3-ac1a-b8fa7d6794d0.png)

# Creating an awaited command
## Without filter

1. Create two commands with `!say` and `$awaitedCommand[say;]` triggers.
2. Paste the following code:

Code for the `!say` command:
```
$nomention
What do you want me to say?
$awaitFunc[say]
```

Code for the command with the `$awaitedCommand[say;]` trigger:
```
$nomention
$message
```

3. Execute command `!say`

![example](https://user-images.githubusercontent.com/113303649/212294420-acf01905-c9f5-4673-99f0-375f9d786f25.png)
## With choose filter

1. Create two commands with `!odd` and `$awaitedCommand[odd;<yes/no/cancel>]` triggers.
2. Paste the following code:

Code for the `!odd` command:
```
$nomention
Is '19' an odd number?
$awaitFunc[odd]
```

Code for the command with the `$awaitedCommand[odd;<yes/no/cancel>]` trigger:
```
$nomention
$if[$message==yes]
   Your answer is correct!
$elseif[$message==no]
   Your answer is incorrect!
$elseif[$message==cancel]
   Command cancelled!
$endif
```

3. Execute command `!odd`

![example](https://user-images.githubusercontent.com/113303649/212088333-54a94584-f854-45cf-8b7e-6980aa370764.png)
## With numeric filter

1. Create two commands with `!number` and `$awaitedCommand[number;<numeric>]` triggers.
2. Paste the following code:

Code for the `!number` command:
```
$nomention
Provide a number!
$awaitFunc[number]
```

Code for the command with the `$awaitedCommand[number;<numeric>]` trigger:
```
$nomention
You have provided a number: $message
```

3. Execute command `!number`

![example](https://user-images.githubusercontent.com/113303649/212089433-e998259a-0e74-4401-9140-a7ea4c6c3776.png)
