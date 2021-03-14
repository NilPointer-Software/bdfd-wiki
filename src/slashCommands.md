# Slash Commands
Slash commands is a new feature added by Discord.
It let's users interact with your bot by typing `/<command name>`.\

![preview](https://i.imgur.com/kLNyEby.jpg) \

# General information
- Discord allows up to 50 slash commands.
- Before using slash commands you need to reinvite the bot with `applications.commands` scope.
- Creating/modifying/deleting slash command might take up to **1hr**.

# Getting started
Before we start, you need **1.18.8** version of the app or later.

### Reinviting the bot
- Open the app
- Pick your bot
- Open navigation drawer and then press *"Server invites"*
- Press the button with *eye* icon.
- Select *Slash commands*
- Go back
- Press *"Add your bot to your server"*
- Invite the bot to your server
![invite scopes](https://i.imgur.com/Y5BUx0F.jpg) \

### Creating a slash command
- Create or modify existing command
- Press the top-right icon
- Press *"Enable slash command trigger"*
- Fill in necessary data
- Save it
![slash command page](https://i.imgur.com/zEF47O5.jpg) \

### Retriving value from options
You can retrive a value from an option
by simply using `$message[<option name>]`.\
If you want this function to work in a normal and slash command\
then you can use `$message[<arg number>;<option name>]`.
#### Example
![message example code](https://i.imgur.com/TZZGQjU.jpg) \
![message example usage](https://i.imgur.com/vyoslhf.jpg) \


### Checking if a command has been executed by a slash trigger
You can use `$isSlash` which returns `true` if a command\
was executed by *slash trigger*, otherwise it returns `false`.

