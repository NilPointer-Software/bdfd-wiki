# BDScript 2
The new edition of BDScript.
> **Warning**: It is still in beta. It may cause unexpected behaviour.

## Introduction
As you probably know, the default scripting language in the app is **BDScript**, there is also an alternative edition called **BDScript Unstable**.\
**BDScript 2** has been created with intention of enhancing its capabilities and fixing some of the problems the other versions had.\
The default edition of **BDScript** has one big issue, commands like `$sum[$sum[3;2];1]` don't work. The reason it doesn't work is because **BDScript** has a predefined order for executing functions.
I won't go into the nitty-gritty details how exactly it works so, just so you know there are certain function combinations that don't work together.\
In order to fix the issue, we've created a new BDScript edition called **BDScript Unstable**. It executes function in a command from bottom to top, from right to left.
It fixed the issue but the new edtition had its own quirks which for some commands could be problematic. That's were **BDScript 2** comes in. This edition executes commands from top to bottom, from left to right *(basically just the way you read most of the books)*.
Besides that, **BDScript 2** has new features like `$eval[]`, `$try` and `$catch` and more.\
This edition is still rough on edges but we intend to polish it and make it the default choice in the app.

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
You can read more about it [here](./trycatch.md)

### $var[]
It can be used to **temporarily** store a value.
After the command executes, all of the vars are removed.\ For this specific variable function you don't need to create a coresponding variable in the app.\
To store a value you simply use `$var[VARIABLE NAME;VALUE]`. To retrieve it you just do `$var[VARIABLE NAME]`.

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

