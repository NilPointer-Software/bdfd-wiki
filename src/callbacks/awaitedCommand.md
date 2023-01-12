# $awaitedCommand
It gets triggered when an awaited command gets initiated.
## Syntax
```
$awaitedCommand[name;(filter)]
```
## Parameters
- `name`: The name which is used in [`$awaitFunc[]`](../bdscript/awaitFunc.md) function.
- `name`: It is used to limit user input. _(Optional)_
### Supported filters
- `<numeric>`: Accepts only number input.
- `<word1/word2>`: Accepts only those specified words provided inside `<>`. Use `/` as separator for multiple words.
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
> For more info, see the [Awaited Commands Guide](../guides/awaitedCommands.md).
