# BDScript 2

## Introduction
**BDScript 2** is the default scripting language in-app _(as of October 2021)_. It has been created with intention of enhancing it's capabilities and fixing some of the problems the other versions had.

The first edition of **BDScript** has one big issue, commands like `$sum[$sum[3;2];1]` didn't work. The reason it didn't work is because **BDScript** has a pre-defined order for executing functions.

In order to fix the issue, a new BDScript edition was developed called **BDScript Unstable**. It executes function in a command from bottom to top and from right to left.
It fixes the issue, but the new edition has its quirks which could be problematic for some commands. That's where **BDScript 2** comes in. This edition executes commands from top to bottom and from left to right *(basically, just the way you read most of the books)*.\
Besides that, **BDScript 2** has additional features like `$eval[]`, `$try` and `$catch` and more.

## Features
### $eval[]
> **Warning**: It should be used with caution. Remember to restrict the command with `$onlyForIDs[]` or similar function!
If you programmed in JavaScript, you probably know what it does.
It basically executes every function that is provided as an argument.
For example:
```php
$eval[$message]
```
This will execute every function that has been provided by a user.

### $try, $catch and $error[]
This works in a very similar way to the equivalents available in other programming languages.\
You can read more about it [here](./trycatch.md).

### $async
Runs functions asynchronously. Read [this](./async.md) for more information.

### $elseif
Read [this](./ifStatements.md) for more information.

### $var[]
It can be used to **temporarily** store a value.
After the command executes, all of the vars are removed.

For this specific variable function, you don't need to create a corresponding variable in the app.

To store a value, simply use `$var[VARIABLE NAME;VALUE]` and to retrieve, do `$var[VARIABLE NAME]`.

### $stop
It stops the command execution. It may seem like a useless function but it can come in handy with `$if`s or `$try`s.

### $optOff[]
It should be used only by more advanced users.\
The full function's name is *optimizations off*. Sometimes **BDScript 2** doesn't execute the same function twice and it uses the previous result instead.
**$optOff[]** allows disabling that behaviour for provided functions.

Here's a small example:
```php
$random // returns 3
$random // returns 3
$random // returns 3
$optOff[$random] // returns 1
$random // returns 1
$random // returns 1
```

