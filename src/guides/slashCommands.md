# Slash Commands
Slash commands is a new feature added by Discord.
It let's users interact with your bot by typing `/<command name>`.

![preview](https://i.imgur.com/kLNyEby.jpg) 

# General information
- Discord allows up to 200 slash commands _(100 global & 100 guild based commands)_.
- To use slash commands, you need to invite the bot with `applications.commands` scope.
- Creating/modifying/deleting global slash commands might take up to **1 hour**.
- Creating a guild slash command is instant but it won't appear unless you have registered them in the current guild using `$registerGuildCommands[(slash command name;...)]` function.


    > 📝 Guild slash commands doesn't appear in DMs unlike global slash commands.
# Getting started
Before we start, you need **2.0.18** version of the app or later.

## Inviting the bot
- Method #1
   - Visit [Discord Developer](https://discord.com/developers/applications) official website and select your bot application.
   - Click hamburger icon `≡` on top-left of the website and choose `OAuth2` tab.
   - In `OAuth2` tab, click `URL Generator` sub-tab.
   - Choose `bot` & `application.commands` in scope part and desired bot permissions.
   - Copy the generated url below and invite your bot into your server.

- Method #2
   - Open BDFD app and select your bot.
   - Press `Add invite bot to server` button in dashboard tab.
   - Click `Edit invite link scopes` and enable *"Slash commands"* if it disabled.
   - Now, go back & press *"Add your bot to your server"*
   - Finally, invite the bot into your server.

## Creating a slash command
- Create or modify an existing command.
- Click *"Slash command trigger"*.

   ![](https://i.ibb.co/XYRc7Pv/Screenshot-20220717-164715.png)
- Choose *"Enable global slash command"* or *"Enable guild slash command"* depending on your preference.
- Fill-up necessary data and save it.

#### Example

![Screenshot_20220717_170852](https://user-images.githubusercontent.com/95774950/179396882-832a7158-f3db-46f2-bf38-2f5a3125c201.png)
![Screenshot_20220717_170915](https://user-images.githubusercontent.com/95774950/179396889-d9891b2a-74dd-4454-97b5-75eee1d12db0.png)
![Screenshot_20220717_171511](https://user-images.githubusercontent.com/95774950/179396894-e8b8e0c7-fe73-4f0b-8787-d40f8d3df630.png)


## Slash options
Slash commands can have upto 25 options per slash.

### Slash options types
- Text - Accepts any string data input _(Max character limit is 4000)_.
- Integer - Accept any integer value i.e non-fractional values
- Number - Accept any number value
- Boolean - Accept true or false values
- User - Accept user mention
- Channel - Accept channel mention
- Role - Accept role mention
- Mentionable - Let user to mention any user or role
- Attachments - Let user to send attachments


### Retriving value from options
To retrive a value from an option, use  `$message[<option name>]`.

> If you want this function to work in a normal and slash command\
then you can use `$message[<arg number>;<option name>]`.
#### Example
![message example code](https://i.imgur.com/TZZGQjU.jpg) \
![message example usage](https://i.imgur.com/vyoslhf.jpg) 


### Checking if a command has been executed by a slash trigger
You can use `$isSlash` which returns `true` if a command\
was executed by *slash trigger*, otherwise it returns `false`.
