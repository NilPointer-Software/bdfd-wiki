# Awaited Commands

Awaited commands are a special type of command where the bot waits for the user's response.

## Content
[**Functions Used**](#functions-used) > [**Supported Filters**](#supported-filters) > [**$awaitFunc[]**](#awaitfunc) > [**$awaitedCommand[]**](#awaitedcommand) > [**$awaitedCommandError[]**](#awaitedcommanderror) > [**Creating an awaited command**](#creating-an-awaited-command)

## Functions Used
- [`$awaitFunc[]`](../../bdscript/awaitFunc.md)

## Callbacks Used
- [`$awaitedCommand[]`](../../callbacks/awaitedCommand.md)
- [`$awaitedCommandError[]`](../../callbacks/awaitedCommandError.md)

## Supported Filters
- `<numeric>`: Accepts only number input.
- `<word1/word2/...>`: Accepts only specified words provided inside `<>`. Use `/` as a separator for multiple words.

# $awaitFunc
Used to initiate an awaited command.

## Syntax
```
$awaitFunc[Command name;(User ID;Channel ID)]
```

### Parameters
- `Command name` `(Type: String || Flag: Required)`: The name used inside [`$awaitedCommand[]`](#awaitedcommand) and [`$awaitedCommandError[]`](#awaitedcommanderror) callbacks.
- `User ID` `(Type: Snowflake || Flag: Vacantable)`: The user the awaited command will trigger for. Uses command author, if `User ID` is not given.
- `Channel ID` `(Type: Snowflake || Flag: Optional)`: The channel where the command will be awaited. Uses current channel, if `Channel ID` is not given.

## Example
```
$nomention
What do you want me to say?
$awaitFunc[say]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    What do you want me to say?
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    I love BDFD
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    I love BDFD
```
\

# $awaitedCommand
<div class="functionTags">
  <span id="CallbackTag">Callback</span>
</div>

_Triggered when an awaited command gets responded to._

`$awaitedCommand[]` is a callback, which means it's used in the command trigger (not the code). The command is only run when an awaited command gets responded to.

## Syntax
```
$awaitedCommand[Name;(Filter)]
```

### Parameters
- `Name` `(Type: String || Flag: Required)`: The name used in [`$awaitFunc[]`](#awaitfunc) function.
- `Filter` `(Type: String || Flag: Emptiable)`: Used to limit user input ([Supported filters](#supported-filters)). If no filter is provided, it accepts any input.

## Example
### Without filter
**Trigger: `$awaitedCommand[say;]`**
```
$nomention
$message
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    What do you want me to say?
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    I love BDFD
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    I love BDFD
```
\

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

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is '19' odd number?
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    yes
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Your answer is correct!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is '19' odd number?
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    no
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Your answer is incorrect!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is '19' odd number?
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    cancel
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Command cancelled!
```
\

```admonish info title="Read more"
For more information about the functions used can be found in [If Statements Guide](../guides/general/ifStatements.md).
```

### With numeric filter
**Trigger: `$awaitedCommand[odd;<numeric>]`**
```
$nomention
You have provided a number: $message
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Provide a number!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    52
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    You have provided a number: 52
```
\

# $awaitedCommandError
<div class="functionTags">
  <span id="CallbackTag">Callback</span>
</div>

_Triggered when an awaited command doesn't match with provided filter._

`$awaitedCommandError[]` is a callback, which means it's used in the command trigger (not the code). The command is only run when an awaited command doesn't match with provided filter.

## Syntax
```
$awaitedCommandError[Name]
```

### Parameters
- `Name` `(Type: String || Flag: Required)`: The name used in [`$awaitFunc[]`](#awaitfunc) function.

## Example
**Trigger: `$awaitedCommandError[number]`**
```
$nomention
Invalid number!
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Provide a number!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    azbc
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Invalid number!
```
\

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

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !say
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    What do you want me to say?
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    Hello everyone!
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hello everyone!
```
\

```admonish warning
Use [`$allowUserMentions[]`](../../bdscript/allowUserMentions.md) and [`$allowRoleMentions[]`](../../bdscript/allowRoleMentions.md) to disable role, @here and @everyone mentions!
```

## With choose filter

1. Create two commands with `!odd` and `$awaitedCommand[odd;<yes/no/cancel>]` triggers.
2. Paste the following code:

Code for the `!odd` command:
```
$nomention
Is '21' an odd number?
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

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !odd
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is '21' odd number?
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    yes
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Your answer is correct!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !odd
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is '21' odd number?
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    no
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Your answer is incorrect!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !odd
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is '21' odd number?
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    cancel
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Command cancelled!
```
\

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

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !number
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Provide a number!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    28
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    You have provided a number: 28
```
\
