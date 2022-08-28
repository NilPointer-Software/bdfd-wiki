# Variables Guide

## Introduction
Variables are how we store data in BDFD. Data can be assigned to users, servers, and globally. Each variable has two elements, which we will breakdown in this section.

### Variable Elements

- `name` - The name of the variable. This can't be modified by the bot, its used to "call" the current variable.
- `value` - The value of the variable. This can be modified by the bot, its returned when the variable name is called in `$getVar`/`$getUserVar`/`$getServerVar`.

### Creating Variables
Creating variables can only be done in the app. Here's how to create a variable, which you can get and modify later.

**#1:** Select the bot you want to add the new variable to.

**#2:** Select the "Variables" tab.

![ex2](https://i.ibb.co/ng3yJNn/Screenshot-20220717-132641.png)

**#3:** Create a new variable.

![ex3](https://i.ibb.co/Mc0nL0b/Screenshot-20220717-133047.png)

**#4:** Give the variable a name and value.

![ex4](https://user-images.githubusercontent.com/69215413/126413362-99e23e07-b01a-4ded-8be3-454837cb1ca5.png)

**#5:** Save your changes!

![ex5](https://i.ibb.co/dbpJDmr/Screenshot-20220717-133424.png)

### Editing Variables
Here's how you can modify an existing variable's name/default value.

**#1:** Select the bot you want to edit the variable for.

**#2:** Select the "Variables" tab.

![ex2](https://i.ibb.co/ng3yJNn/Screenshot-20220717-132641.png)

**#4:** Select the variable you want to edit.

![ex3](https://user-images.githubusercontent.com/69215413/126413529-b4f1fce6-a0fc-4962-b67c-94020d37a858.png)

**#5:** Edit the variable name and/or value.

![ex4](https://user-images.githubusercontent.com/69215413/126413336-3a0c376c-fa30-435f-b5e4-74100ca0859a.png)

**#6:** Save your changes!

![ex5](https://i.ibb.co/dbpJDmr/Screenshot-20220717-133424.png)

### Deleting Variables
Here's how you can delete variables,

**#1:** Select the bot you want to delete the variable for.

**#2:** Select the "Variables" tab.

![ex2](https://i.ibb.co/ng3yJNn/Screenshot-20220717-132641.png)

**#4:** Select the variable you want to delete.

![ex3](https://user-images.githubusercontent.com/69215413/126413671-48dfae45-50e1-446a-843d-46513123a33c.png)

**#5:** Confirm the deletion!

![ex4](https://user-images.githubusercontent.com/69215413/126413742-e9fef40c-01e8-4713-9e61-99d71c2d88f7.png)

> :warning: Deleting variables might return error message in those commands which were using the deleted variables.

## Global/Global-User Variables
`$setVar[variableName;newValue]`/`$getVar[variableName]` are global variable functions, this means they apply to universally *(they don't change per-server or per-user)*. However, if you input a user in the optional `userID` field then it becomes a global-user variable. Global-user variables stay with the user in every server. The usage of global-user variables looks like this: `$setVar[variableName;newValue;userID]`/`$getVar[variable name;userID]`.

### Global Variables - Functions

- `$setVar[variableName;newValue]` - Changes the provided global-variable's value to 'newValue'.
> 🧙‍♂️ Global variables are universal, meaning if the variable gets modified, the modification applies to everyone.
- `$getVar[variableName]` - Gets the current value of the provided global-variable.

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

> 🧙‍♂️ Global-user variables stay with the user in every server. Unlike user variables which are unique per-user and differ in each server.

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
User variables are unique per-user and differ in each server.

### User Variables - Functions
- `$setUserVar[variableName;newValue;(userID;guildID)]` - Sets the provided variable to 'newValue' for the inputted 'userID' and 'guildID', or the author of the command if no 'userID' is provided and current guild if no 'guildID' is provided.
- `$getUserVar[variableName;(userID;guildID)]` - Gets the current value for the provided user variable. Returns the author's variable value if no 'userID' is provided and uses the current guild if no 'guildID' is provided.

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

## Server Variables
Server variables are unique per-server.

### Server Variables - Functions
- `$setServerVar[variableName;newValue;(optional) serverID]` - Sets the provided variable to 'newValue' for the inputted 'serverID', or the server that the command was ran in; if no 'serverID' was provided.
- `$getServerVar[variableName;(optional) serverID]` - Gets the current value for the provided server variable. Returns the current server's variable value if no 'serverID' is provided.

### Server Variables - Examples

Here's the variable we're working with:

![ex](https://user-images.githubusercontent.com/69215413/126411663-f93bf15d-57d5-4f36-8a6d-fda6a556aebd.png)

This command adds `1` cookie to the 'ServerCookies' variable value, everytime it is ran.
```
$nomention
This server now has `$sum[$getServerVar[ServerCookies];1]` cookies picked 🍪
$setServerVar[ServerCookies;$sum[$getServerVar[ServerCookies];1]]
```

![ex](https://user-images.githubusercontent.com/69215413/126411852-648c6701-15c9-46e2-853e-d1ab68f321d3.png)

This command returns how many cookies the server has currently.
```
$nomention
Total Server Cookies: 🍪 $getServerVar[ServerCookies]
```

![ex](https://user-images.githubusercontent.com/69215413/126411873-6f2ddfb2-d1b1-4000-a7c0-7c8a25ca3bf0.png)

## Economy

### Local vs Global
- **Local Economy** - Changes per server. If a user has 10,000 coins in one server, in another server they would have a different amount. For example, Unbelievaboat has a local economy. *(local economy uses user-variables)*
- **Global Economy** - Does not change per server. If a user has 10,000 coins in one server, in another server they would have the same amount. For example, Dank Memer has a global economy. *(global economy uses global-user variables)*

### Local Economy
- Replace "Money" with your cash/money variable, if "Money" is the name of your money variable then you can just leave it as is!
- Replace "Amount" with the amount of money you want to add/remove to/from the user. Like this: `100`, `$random[1;10]`, `$random[100;1000]`, `10000`.

Gets the user's current balance. If a user mention is provided, then the bot will return that user's balance:
```
$getUserVar[Money;$mentioned[1;yes]]
```

Adds money to the mentioned user:
```
$setUserVar[Money;$sum[Amount;$getUserVar[Money;$mentioned[1]]];$mentioned[1]]
```

Adds money to the user running the command:
```
$setUserVar[Money;$sum[Amount;$getUserVar[Money]]]
```

Removes money to the mentioned user:
```
$setUserVar[Money;$sub[Amount;$getUserVar[Money;$mentioned[1]]];$mentioned[1]]
```
Removes money from the user running the command:
```
$setUserVar[Money;$sub[Amount;$getUserVar[Money]]]
```

Leaderboard:
```
$userLeaderboard[Money;asc]
```

### Global Economy
- Replace "Money" with your cash/money variable, if "Money" is the name of your money variable then you can just leave it as is!
- Replace "Amount" with the amount of money you want to add/remove to/from the user. Like this: `100`, `$random[1;10]`, `$random[100;1000]`, `10000`.

Gets the user's current balance/amount of money. If a user mention is provided then the bot will return that user's balance:
```
$getVar[Money;$mentioned[1;yes]]
```

Adds money to the mentioned user:
```
$setVar[Money;$sum[Amount;$getVar[Money;$mentioned[1]]];$mentioned[1]]
```

Adds money to the user running the command:
```
$setVar[Money;$sum[Amount;$getVar[Money;$authorID]];$authorID]
```

Removes money to the mentioned user:
```
$setVar[Money;$sub[Amount;$getVar[Money;$mentioned[1]]];$mentioned[1]]
```

Removes money from the user running the command:
```
$setVar[Money;$sub[Amount;$getVar[Money;$authorID]];$authorID]
```

Global leaderboard:
```
$globalUserLeaderboard[Money;asc]
```

## Leaderboards
You can generate variable leaderboards, using the functions below. *Click the hyperlinks for more information about these leaderboard functions*.
- [$globalUserLeaderboard](../bdscript/globalUserLeaderboard.md) - Global-User Variables.
- [$userLeaderboard](../bdscript/userLeaderboard.md) - User Variables.
- [$serverLeaderboard](..bdscript/serverLeaderboard.md) - Server Variables.
- [$getLeaderboardValue](../bdscript/getLeaderboardValue.md) - Fetchs leaderboard value.

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
