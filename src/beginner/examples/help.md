# Help Command
Let's make a simple help command in *Bot Designer for Discord*.

**#1:** Create a command.

**#2:** Give your command a trigger, for this example, we will call it "`!help`":

![](https://user-images.githubusercontent.com/69215413/145681891-9d2aa736-4450-4f39-87a0-889c582fdde7.png)

**#3:** Let's make a fancy embed!

First, we'll add a title. We have a function called `$title` for this. I'll use `$title[Help Command]`, this will make the embed title "Help Command". Feel free to customize the title's text to your liking.

Secondly, we'll add the description. We have a function called `$description` for this. I'll use `$description[Hello World!]` for now, until we list our commands later in this tutorial.

Thirdly, we'll add a color border. We have a function called `$color` for this. I'll use `$color[#0000FF]` to set the color border to blue. Notice what I inputted as an argument in `$color`'s brackets, `#0000FF`, this is a color hex. Don't worry, you aren't expected to know what color hexes to use or what they are. All you need to know is that color hexes are how we tell Discord what color the embed will be. You can select a color hex from a color picker [here](https://htmlcolorcodes.com/color-picker).

Here's what the code looks like put together:
```
$title[Help Command]
$description[Hello World!]
$color[#0000FF]
```

Now that we've added all the embed elements and saved our change in the *Bot Designer for Discord* app, if we go into Discord and run our command, it should look something like this:
![](https://user-images.githubusercontent.com/69215413/145682268-dbdb3c6a-45b9-4b5e-aa55-6738378f3168.png)

> 🧠 **Tip:** How do I remove the mention from the top of the message? Add `$nomention` somewhere in the code.

**#4:** Adding your commands.

The point of a help command is to showcase what commands your bot has. You have two options:\
1: Use `$botCommands[, ]` to generate a list of your bot's commands separated by `, `.
2: Manually list out all the bot's commands.\

The downside to option 1 is that you can't provide a description or the usage for each command, rather it'll only be able to put the command's trigger.

Here's an example of both methods being applied to our previous code:

**Method 1**
```
$title[Help Command]
$description[$botCommands[, ]]
$color[#0000FF]
```

**Method 2**
```
$title[Help Command]
$description[
!command1 - Description of command1
!command2 - Description of command2
!command3 - Description of command3
]
$color[#0000FF]
```

You can choose one of the examples above to use, then customize it to your likings.

**#5:** Profit! Good job, you just made a simple `!help` command. If you'd like to get more advanced check out some of our other guides.