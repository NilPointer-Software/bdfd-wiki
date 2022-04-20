# Stats Command
Let's make a simple stats command in *Bot Designer for Discord*.

### Prerequisite Knowledge
Before following this guide, make sure you know how to:
- [Creating a command](/src/beginner/creatingCommands.md)
- [Making a embed](/src/resources/embeds.md)

### Steps
**#1:** Create a command.

**#2:** Give your command a trigger, for this example, we will name it "`!stats`":

![](https://user-images.githubusercontent.com/69215413/145683276-b3faa942-beff-4259-aa97-c3af9a3ad081.png)

**#3:** Let's make a fancy embed:
```
$nomention
$title[Statistics]
$description[
...
]
$color[#0000FF]
$footer[Thanks for your support!]
```
> Feel free to customize the embed to your liking!

**#4:** Now we'll replace `...` in [`$description`](/src/bdscript/description.md) with statistics.

*Bot Designer for Discord* has a function called [`$serverCount`](/src/bdscript/serverCount.md) that returns how many servers your bot is currently. It also offers a function called [`$allMembersCount`](/src/bdscript/allMembersCount.md) that returns how many members the bot has across all the servers it is in.

Now that we know which functions we'll be using, let's put everything together:
```
$nomention
$title[Statistics]
$description[
Server Count: $serverCount
Total Members: $membersCount
]
$color[#0000FF]
```
> Don't forget to save your changes when inputting your command code!


**#5:** Profit! Good job, you've built your very own `!stats` command. If we run our new command in Discord, it should look something like this:

![](https://user-images.githubusercontent.com/69215413/145683743-3bc4599a-00b8-4121-b59f-c16298ef7733.png)