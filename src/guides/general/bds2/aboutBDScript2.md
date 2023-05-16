# BDScript 2

## Introduction
**BDScript 2** is the default in-app scripting language _(as of October 2021)_. It has been created with intention of enhancing its capabilities and fixing some of the problems previous versions had.

The first edition of **BDScript** has one big issue, commands like `$sum[$sum[3;2];1]` didn't work. The reason it didn't work is because **BDScript** has a pre-defined order for executing functions.

In order to fix the issue, a new BDScript edition was developed called **BDScript Unstable**. It executes function in a command from bottom to top and from right to left.
It fixes the issue, but the new edition has its quirks which could be problematic for some commands. That's where **BDScript 2** comes in. This edition executes commands from top to bottom and from left to right *(basically, just the way you read most of the books)*.\
Besides that, **BDScript 2** has additional features like `$eval[]`, `$try` and `$catch` and more.

## Features
### $eval[]
Evaluates the provided BDScript code. Read [this](../../../bdscript/eval.md) for more information.

### $try, $catch and $error[]
This works in a very similar way to the equivalents available in other programming languages.\
You can read more about it [here](./errorHandling.md).

### $async
Runs functions asynchronously. Read [Async Guide](./asyncScopes.md) for more information.

### $elseif
Read [If Statements Guide](../ifStatements.md) for more information.

### $var[]
Creates a temporary variable. Read [this](../../../bdscript/var.md) for more information.

### $stop
It stops the command execution. It may seem like a useless function but it can come in handy with `$if`s or `$try`s.

### $optOff[]
Executes functions with turned off optimizations. Read [this](../../../bdscript/optOff.md) for more information.
