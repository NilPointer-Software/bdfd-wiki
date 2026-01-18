# Error Handling
In this section, you’ll learn how to use the error handling.

```admonish danger title="BDScript 2"
You must use **BDScript 2** for the functions to work correctly.
```

## Content
[**Functions Used**](#functions-used) > [**$try**](#try) > [**$endtry**](#endtry) > [**$catch**](#catch) > [**$error[]**](#error) > [**$stop**](#stop) > [**Error Type**](#error-type) > [**Create BDScript custom error**](#create-bdscript-custom-error) > [**Create custom error for function**](#create-custom-error-for-function)

## Functions Used
- [`$try`](../../../bdscript/try.md)
- [`$endtry`](../../../bdscript/endtry.md)
- [`$catch`](../../../bdscript/catch.md)
- [`$error[]`](../../../bdscript/error.md)

## Support Functions Used
- [`$stop`](../../../bdscript/stop.md)

# $try
Opens the Error Handling block.

## Syntax
```
$try
```

## Example
- Let's create 3 commands with different triggers: `!example`, `!test` and `!bot`.

Command code for `!example` trigger:
```
$nomention
$try
  $sum[2;a]
$endtry
```

Command code for `!test` trigger:
```
$nomention
$try
  $sum[2;2]
$endtry
```

```admonish question title="What is this?"
How [`$sum[]`](../../../bdscript/sum.md) works? The explanation of how [`$endtry`](#endtry) works will be given below.
```

Command code for `!bot` trigger:
```
$nomention
$sum[2;a]
```

Now let's run each command:

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !test
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    4
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !bot
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    ❌ Function <code>$sum</code> at <code>2:9</code> returned an error: expected integer in position 2, got 'a'
```

As you can see only `!test` command returned a response, but why?

```admonish abstract title="Explanation"
`$try` executes whole code (from top to bottom and from left to right) in its block and stops execution if it encounters an error.
```

```admonish danger title="Need to know"
`$try` block does not support some errors. For example not closed bracket in the function.
```

# $endtry
Closes the Error Handling block.

## Syntax
```
$endtry
```

## Example
```
$nomention
$try
  $sum[2;5]
$endtry
```

- With `$endtry`:
```discord yaml
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
    7
```

- Without `$endtry`:
```discord yaml
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
    <code>$try</code> not closed with <code>$endtry</code> or invalid use of <code>$sum</code>
```

# $catch
Used to create a sub-block between `$try` and `$endtry` that will contain the code that will be executed when an error occurs.

## Syntax
```
$catch
```

## Example
```
$nomention
$try
  $sum[2;$message]
$catch
  ❌ Invalid number!
$endtry
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example a
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    ❌ Invalid number!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 6
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    8
```

```admonish question title="What is this?"
How [`$message`](../../../bdscript/message.md) works?
```

# $error
Used in the `$catch` block to return the BDScript 2 error information.

## Syntax
```
$error[Type]
```

## Parameters
- `Type` `(Type: Enum || Flag: Required)`: What type of error data to return.

### Error Type
| Name      | Description                                                            | Example
| --------- | ---------------------------------------------------------------------- | ----------------------------------------
| `command` | Returns the name of the function that returned the error.              | $sum
| `message` | Returns the error message that was received.                           | expected integer in position 2, got 'a'
| `source`  | Returns the content of the line where the error occurred.              | $sum[2;a]
| `row`     | Returns the number of the row in the code where the error occurred.    | 2
| `column`  | Returns the number of the column in the code where the error occurred. | 10

~~~admonish warning title="Syntax sensitivity"
The type input must only be written in lowercase letters.\
❌ Not correct:
```
$error[ROW]
```
✅ Correct:
```
$error[row]
```
~~~

## Example
```
$nomention
$try
  $description[Hello developer!;]
$catch
❌ An error has occurred!
Function: $error[command]
Error: $error[message]
$endtry
```

```discord yaml
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
    ❌ An error has occurred!
    Function: $description
    Error: expected valid value in position 2, got empty value
```

```admonish question title="What is this?"
How [`$description[]`](../../../bdscript/description.md) works?
```

# $stop
Stops the command execution.

## Syntax
```
$stop
```

## Example
```
$nomention
$try
  $sum[2;$message]
$catch
  $stop
$endtry
Number: $message
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example a
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 5
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    7
    Number: 5
```
*As we can see, the bot did not send "Number: a" when we tried to use "`!example a`".*

# Create BDScript custom error
With `$error[]` you can create custom error for code!

```
$nomention
$try
  $sum[2;$message]
$catch
  $title[Error!]
  $description[🚧 Description:
```$error[message]```]
  $addField[Location;Row: `$error[row]` | Column: `$error[column]`]
  $footer[🔍 $error[source]]
$endtry
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 100
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    102
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example a
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  embed: 
    title: |
     Error!
    description: |
     🚧 Description:
     <code class="multiline">expected valid value in position 2, got empty value</code>
    fields:
    - name: Location
      value: |
        Row: <code>2</code> | Column: <code>17</code>
    footer:
      text: | 
       🔍 $sum[2;]
```

# Create custom error for function
With error handling you can embed an error for...
- Cooldown functions: [`$serverCooldown[]`](../../../bdscript/serverCooldown.md), [`$globalCooldown[]`](../../../bdscript/globalCooldown.md), [`$cooldown[]`](../../../bdscript/cooldown.md);
- "Only If" Functions: [`$onlyAdmin[]`](../../../bdscript/onlyAdmin.md), [`$onlyIf[]`](../../../bdscript/onlyIf.md) and other similar "Only If" functions...;
- Enabled function: [`$enabled[]`](../../../bdscript/enabled.md).

Let's create embed error for `$cooldown[]` function:

```
$nomention
$try
  $cooldown[5m;]
  Hey, are you making an example for the guide?
$catch
  $description[⏱️ You have a cooldown! Wait $getCooldown[normal] seconds.]
$endtry
```
*This example will work with other functions too, just replace `$cooldown[]` function (Specified above).*

```discord yaml
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
    Hey, are you making an example for the guide?
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
  embed: 
    description: |
      ⏱️ You have a cooldown! Wait 290 seconds.
  ```

```admonish question title="What is this?"
How [`$cooldown[]`](../../../bdscript/cooldown.md) and [`$getCooldown[]`](../../../bdscript/getCooldown.md) works?
```

```admonish danger title="BDScript 2"
Don't forget to choose **BDScript 2** when using the [Error Handling functions](#functions-used)!
```

