# Variables Guide

## Introduction
Variables are how we store data in BDFD. Data can be assigned to users, servers, and globally. Each variable has two elements, which we will breakdown in this section.

### Variable Elements

- `name` - The name of the variable. This can't be modified by the bot, its used the "call" the current variable.
- `value` - The value of the variable. This can be modified by the bot, its returned when the variable name is called in `$getVar`/`$getUserVar`/`$getServerVar`.

### Creating Variables
Creating variables can only be done in the app. Here's how to create a variable, which you can get and modify later.

**#1:** Select the bot you want to add the new variable to.

**#2:** Click the 3-line menu.

![ex1](https://user-images.githubusercontent.com/69215413/126074448-b0bad0e5-b77b-43a8-938f-d784c0a7eb08.png)

**#3:** Select the "Variables" tab.

![ex2](https://user-images.githubusercontent.com/69215413/126074572-9bd359b1-31db-4078-92f4-2b592e511316.png)

**#4:** Create a new variable.

![ex3](https://user-images.githubusercontent.com/69215413/126074475-aa5e1ff3-56ef-4dc2-9a04-f6430792f9cb.png)

**#5:** Give the variable a name and value.

![ex4](https://user-images.githubusercontent.com/69215413/126074479-0e4e5e54-62d6-4ccf-866a-32007e8f1d16.png)

**#6:** Save your changes!

![ex5](https://user-images.githubusercontent.com/69215413/126074596-7c185a1e-ec81-421d-ab46-bf7bc657e7bc.png)

## Global/Global-User Variables
`$setVar[variableName;newValue]`/`$getVar[variableName]` are global variable functions, this means they apply to every server and every user. However, if you input a user id in the optional `userID` field then it becomes a global-user variable. Global-user variables stay with a user in every server but are unique per user. The usage of global-user variables looks like this: `$setVar[variableName;newValue;userID]`/`$getVar[variable name;userID]`.


### Global Variables - Functions

- `$setVar[variableName;newValue]` - Changes the provided global-variable's value to 'newValue'.
- `$getVar[variableName]` - Gets the current value of the provided global-variable.

> 🧙‍♂️ Global variables are universal, meaning if the variable gets modified, the modification applies to everyone.

### Global Variables - Example
This is the variable we're working with:

![ex](https://user-images.githubusercontent.com/69215413/126381882-091abee6-7a3a-4129-a7bf-1f008c1e57c0.png)

This command adds `1` cool point to the 'CoolCount' variable value, everytime it is ran.
```
$nomention
$setVar[CoolCount;$sum[$getVar[CoolCount];1]]
Cool counter updated! 😎
$c[Updates the variable for all servers.]
```
![ex](https://user-images.githubusercontent.com/69215413/126382498-928ac183-7e9e-41cc-83aa-615285b22b2a.png)

This command returns how many cool points have been earned.
```
$nomention
Cool counter is at $getVar[CoolCount] currently! Keep running `!cool` for more cool points.
$c[This is the same for everyone, no matter who runs it.]
```

![ex](https://user-images.githubusercontent.com/69215413/126382138-d99ca7e2-0538-48fb-9469-9fd4a3fb094e.png)

### Global-User Variables - Functions
- `$setVar[variableName;newValue;userID]` - Sets the provided variable to 'newValue' for the inputted 'userID'.
- `$getVar[variableName;userID]` - Gets the provided variable's value for the inputted 'userID'.

> 🧙‍♂️ Global-user variables stay with the user in every server, they are unique per-user. Unlike user variables which unqiue per-user and differ in each server.

### Global-User Variables - Examples
This is the variable we're working with:

![ex](https://user-images.githubusercontent.com/69215413/126384691-b289938f-e53d-4e88-91ab-a7fae7e6fae0.png)

This command modifies the user's bio.
```
$nomention
$argsCheck[>1;❌ Please provide text!]
$setVar[Bio;$noMentionMessage;$authorID]
Successfully updated your bio!
$c[Updates the variable for the user in all servers.]
```
![ex](https://user-images.githubusercontent.com/69215413/126384863-66d14e77-ef14-4a3a-aa6f-c8601342c465.png)

This command returns the user's current bio.
```
$nomention
**<@$mentioned[1;yes]>'s Bio:**
$getVar[Bio;$mentioned[1;yes]]
$c[Gets the author/mentioned-user's current bio.]
```
![ex](https://user-images.githubusercontent.com/69215413/126384903-6b575634-15d3-4e00-90f2-17e51e1c9840.png)

## User Variables
User variables are unqiue per-user and differ in each server.

### User Variables - Functions
- `$setUserVar[variableName;newValue;(optional) userID]` - Sets the provided variable to 'newValue' for the inputted 'userID', or the author of the command if no user is provided.
- `$getUserVar[variableName;(optional) userID]` - Gets the current value for the provided user variable. Returns the author's variable value if no 'userID' is provided.

### User Variables - Examples

⚠️ **This example would require premium to be fully functional!** ⚠️

Here's the variable we're working with:
![example](https://user-images.githubusercontent.com/69215413/126389484-d74eccfa-9dc1-43ef-a538-4c07e841e102.png)

This command adds `1` to the user's 'Mentions' variable, everytime the user mentions someone.
> 🧙‍♂️ The trigger for this command would be `$messageContains[<@]`.
```
$nomention
$setUserVar[Mentions;$sum[$getUserVar[Mentions];1]]
```

This command returns how many times the user has mentioned others, in the current server:

```
$nomention
You have mentioned others `$getUserVar[Mentions]` times in $serverName[$guildID]!
```

![ex](https://user-images.githubusercontent.com/69215413/126389898-817207a8-1232-4288-a07d-48eb3408afd0.png)

## Economy

### Global vs Local

## Additional Tips
- You can change the variables with a `userID` or with a mention of the user. Here's a example: 
```
$setUserVar[Money;0;<@696368083517964288>]
$setUserVar[Money;0;696368083517964288]

$getUserVar[Money;<@696368083517964288>]
$getUserVar[Money;696368083517964288]

$setVar[Money;0;<@696368083517964288>]
$setVar[Money;0;696368083517964288]

$getVar[Money;696368083517964288]
$getVar[Money;696368083517964288]

$c[All of these would work fine!]
```
