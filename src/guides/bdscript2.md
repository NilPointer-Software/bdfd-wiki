# BDScript 2
The new edition of BDScript.
> **Warning**: BDScript 2 is still in beta. It may cause unexpected behavior.

## Introduction
As you probably know, the default scripting language in the app is **BDScript**, there is also an alternative edition called **BDScript Unstable**.\
**BDScript 2** has been created with intention of enhancing its capabilities and fixing some of the problems the other versions had.\
The default edition of **BDScript** has one big issue, commands like `$sum[$sum[3;2];1]` don't work. The reason it doesn't work is that **BDScript** has a predefined order for executing functions.
I won't go into the nitty-gritty details of how exactly it works, but certain function combinations don't work together.\
To fix this issue, we created a new BDScript edition called **BDScript Unstable**. It executes functions within commands from bottom to top, from right to left.
**BDScript Unstable** fixed these issues, but had some of its own quirks, which caused unexpected behavior for some commands.\
That's where **BDScript 2** comes in. This edition executes commands from top to bottom, from left to right *(basically the way you read most books)*.
Besides that, **BDScript 2** has new features like `$eval[]`, `$try` and `$catch` and many more.\
This edition is still rough on edges but we intend to polish it, and eventually make it the default scripting mode in the app.

## Features
### $eval[]
> **Warning**: It should be used with caution. Remember to restrict the command with `$onlyForIDs[]` or a similar function!
It executes every function that is provided as an argument.
For example:
```php
$eval[$message]
```
This will execute every function that has been provided by the user.

### $try, $catch and $error[] - Error Handling
Error Handling works in a very similar way to the equivalents available in other programming languages.\
You can read more about Error Handling [here](./trycatch.md).

### $elseif
Read [this](./ifStatements.md#else-if) for more information.

### $var[]
Can be used to *temporarily* store a value.
After the command executes, all of the vars are removed.\ For this specific variable function, you don't need to create a corresponding variable in the app.\
- To store a value, you use `$var[variableName;value]`;
- To retrieve the value of a temporary variable, you use `$var[variableName]`.
> **Note:** Variables must be set before they are retrieved.

### $stop
Stops the command execution. It may seem like a useless function but can come in handy with `$if`s or `$try`s.

### $async
Runs functions asynchronously. Read [this](./async.md) for more information.

### $optOff[]
`$optOff[]` stands for *optimizations off*. Sometimes **BDScript 2** doesn't execute the same function twice and it uses the previous result instead.
**$optOff[]** allows disabling that behaviour for provided functions.
Here's a example:
```php
$random // returns 3
$random // returns 3
$random // returns 3
$optOff[$random] // returns 1
$random // returns 1
$random // returns 1
```
