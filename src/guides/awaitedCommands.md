# Awaited Commands

Awaited commands are a special type of command where the bot waits for the user's response.

## Content
[**Used**](#used) > [**Supported Filters**](#supported-filters) > [**$awaitFunc[]**](#awaitfunc) > [**$awaitedCommand[]**](#awaitedcommand) > [**$awaitedCommandError[]**](#awaitedcommanderror) > [**Create Await command**](#create-await)

## Used
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
_Triggered when an awaited command gets initiated._

`$awaitedCommand[]` is a callback, which means it's used in the command trigger (not the code). The command is ran when an awaited command gets initiated.
## Syntax
```
$awaitedCommand[name;(filter)]
```
### Parameters
- `name`: The name used in [`$awaitFunc[]`](#awaitfunc) function.
- `filter`: It is used to limit user input. [Supported Filters](#supported-filters)
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

`$awaitedCommandError[]` is a callback, which means it's used in the command trigger (not the code). The command is ran when an awaited command doesn't match with provided filter.

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

## Create Await

- Empty Filter

   ![Screenshot_20220812_204604](https://user-images.githubusercontent.com/95774950/184388068-2d182254-79ed-45b0-962a-1dd68dc7684a.png)
   ![Screenshot_20220812_204552](https://user-images.githubusercontent.com/95774950/184388050-b9b7bdd8-1ee5-4ea4-919b-ed6dbc4849bd.png)
   ![Screenshot_20220812_205309](https://user-images.githubusercontent.com/95774950/184388088-c6ce5d6b-cbfe-4374-889c-cb2d57cbf6c5.png)

- Choice Filter

   ![Screenshot_20220813_072224](https://user-images.githubusercontent.com/95774950/184464158-083019b0-821a-4683-a969-02293b44f86a.png)
   ![Screenshot_20220813_072236](https://user-images.githubusercontent.com/95774950/184464161-62689486-928a-4aa1-900f-8ea295fc9437.png)
   ![Screenshot_20220813_072322](https://user-images.githubusercontent.com/95774950/184464163-50eac8f9-6194-4763-ac20-e18a2c97d47d.png)
   ![Screenshot_20220813_072131](https://user-images.githubusercontent.com/95774950/184464150-79857481-578f-4f4b-b725-126f35a88ad4.png)

   > ⚠️ The above example requires **BDScript 2** since it contains `$elseif`.

- Numeric Filter

   ![Screenshot_20220812_211213](https://user-images.githubusercontent.com/95774950/184392300-5fe57ba0-1d6e-4488-af7f-82aa4a82d64f.png)
   ![Screenshot_20220812_211252](https://user-images.githubusercontent.com/95774950/184392283-62ca15a3-0825-448e-bede-e8b1114af18e.png)
   ![Screenshot_20220812_211311](https://user-images.githubusercontent.com/95774950/184392271-57fd1dd6-2ff7-47de-968e-846f2dd3b7ef.png)
   ![Screenshot_20220812_211155](https://user-images.githubusercontent.com/95774950/184392254-323d07ef-7e17-4ef0-aced-852b7c3870ec.png)
