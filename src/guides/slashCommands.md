# Slash Commands
Slash commands is a new feature added by Discord.
It let's users interact with your bot by typing `/<command name>`.

![](https://user-images.githubusercontent.com/69215413/141687458-1cce4761-1935-4d62-a777-80c37f53145c.png)

## Information
- Discord allows up to 50 slash commands.
- Slash command names must be lowercase.
- Before using slash commands you need to reinvite the bot with `applications.commands` scope.
- Creating/modifying/deleting slash command might take up to **1hr**.

## Getting started
Before we start, you need **1.18.8** version of the app or later.

### Reinviting the bot
**#1:** Open the app.

**#2:** Pick your bot.

**#3:** Click "Invite bot to server" from the dashboard.

![](https://user-images.githubusercontent.com/69215413/141686750-94331a92-f569-41df-8c3f-68393e119c3a.png)

**#4:** Press the "Edit invite link scopes" button.

![](https://user-images.githubusercontent.com/69215413/141687026-379d6fde-5e96-44f7-98f3-37c6511fcb66.png)

**#5:** Make sure "Slash Commands" is checked.

![](https://user-images.githubusercontent.com/69215413/141687120-87d9e2d8-e24b-44f6-b774-5c135df16134.png)

**#6:** Go back to the invite menu.

![](https://user-images.githubusercontent.com/69215413/141687369-39f00770-bd47-453d-848a-2d5913bc3d4d.png)

**#7:** Press "Add your bot to your server"

![](https://user-images.githubusercontent.com/69215413/141687393-729b41c9-0222-4ae2-89a7-05a5163ffaf5.png)


**#8:** Invite the bot to your server.

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

