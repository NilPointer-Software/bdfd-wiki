# Scripting Modes
Scripting Modes are the different options provided in the application to control how specific command codes get processed and ran.

### Scripting Mode Options
- **BDScript** - Predefined order of executing functions.
- **BDScript 2** - Reads code from top to bottom, left to right *(like how you read most books)*. Grants access to [BDScript 2 Features](./bdscript2).
- **BDScript Unstable** - Reads code bottom to top, right to left. Good for using multiple functions within other functions.
- **JavaScript** - Use [JavaScript](/src/javascript/introduction.md) code. Please note that BDFD's JavaScript is not `discord.js`.

### Default Scripting Mode
The default scripting mode in the app is currently BDScript 2. It should be noted that in older versions of the application BDScript is the default.

### Changing Scripting Modes
If you would like to change the scripting mode you're using for a command, then follow these steps.

**#1:** Select the bot that you want to edit.

**#2:** Go to the "Commands" tab.

![](https://user-images.githubusercontent.com/69215413/141648197-1a41e333-6ba4-4244-83ae-b193d4e94646.png)

**#3:** Edit or create a new command.

**#4:** Once you're in the command editor, under the "Command info" section, click the "Scripting Language" dropdown menu.

![](https://user-images.githubusercontent.com/69215413/141650661-dd6c6430-0bf7-4d88-824d-07b09bef973c.png)


**#5:** Select the scripting mode you wish you use for that command.

![](https://user-images.githubusercontent.com/69215413/141650838-6bf45e2e-dc6e-4cab-9704-0b46437cf6e0.png)

**#6:** Save your changes.

![](https://user-images.githubusercontent.com/69215413/141647785-9c21d996-7ee1-41cb-9737-52635bf1c4ed.png)

### Limiter Hoisting
Limiters are functions like `$onlyIf`, `$enabled`, `$onlyPerms`, `$onlyBotPerms`, `$onlyForRoles`, and any other function that stops code execution if a condition isn't met (e.g. if a user doesn't have a certain role, then the command will not run).\
The positioning of these limiter functions matters in different scripting modes, as the limiter's conditions should be checked before executing any other part of the code.

#### BDScript 2
Since BDScript 2 reads top to bottom, you would put limiters at the top of the code:
```
$nomention
$onlyPerms[ban;You need the `ban` permission to use that!]
$onlyBotPerms[ban;I need the `ban` permission to run that command!]
$onlyForRoles[Moderator;Staff;This is a staff-only command!]
$c[Some code here...]
```

#### BDScript Unstable
Since BDScript Unstable reads bottom to top, you would put limiters at the bottom of the code:
```
$nomention
$c[Some code here...]
$onlyPerms[ban;You need the `ban` permission to use that!]
$onlyBotPerms[ban;I need the `ban` permission to run that command!]
$onlyForRoles[Moderator;Staff;This is a staff-only command!]
```

#### BDScript
Regular BDScript mode has a predefined way of executing functions, this is generally optimized for limiters to already hoisted for you, but can also cause some issues with some limiters being checked before others. If you run into an issue in BDScript mode like this, then try a different scripting mode method.

### Scripting Modes for Troubleshooting
You can use different scripting modes to troubleshoot codes that are not working. For example, a command in BDScript not working may work in BDScript 2 or BDScript Unstable. It's a good debugging tool, as the different scripting modes each have their advantages, disadvantages, and features.