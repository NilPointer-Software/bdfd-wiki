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
Slash options are great way to get an user's input. To create a slash option, click *"Add"* button in `Options` section and fill-up necessary data.

> 📝 Slash commands can have upto 25 options per slash.

#### Example

![Screenshot_20220717_175216](https://user-images.githubusercontent.com/95774950/179398281-90ae991d-1eb6-4435-b1f7-2206a92ce25f.png)

### Slash options types

- Text - Accepts any string data input _(Max character limit is 4000)_.
- Integer - Accepts only integer value input. For example: 3, -70 etc.
- Number - Accepts only number value input. For example: 5.3, -35, 23 etc.
- Boolean - Accepts either true or false input.
- User - It allows to mention any user of current guild.
- Channel - It allows to mention any channel of current guild.
- Role - It allows to mention any role of current guild.
- Mentionable - It allows to mention any user or role of current guild.
- Attachments - It allows to upload attachments.

### Retrieving value from options
To retrieve a value from an option, use  `$message[<option name>]`.

> 📝 If you want this function to work both in normal and slash command\
then you can use `$message[<arg number>;<option name>]`.

#### Example

![Screenshot_20220717_175245](https://user-images.githubusercontent.com/95774950/179398313-cec8420e-942b-4184-8b8b-c813584cb420.png)
![Screenshot_20220717_175635](https://user-images.githubusercontent.com/95774950/179398322-d9a27169-0030-458d-8abc-ed4462637862.png)
![Screenshot_20220717_175649](https://user-images.githubusercontent.com/95774950/179398327-6c1f1c00-205f-4dcf-a0ce-08cefed5c937.png)

## Pre-defined choices
Choices
> 📝 A slash command can have max 25 choices per option.

###

```
```
> Learn more about $if statements here.

### Checking if a command has been executed by a slash trigger
You can use `$isSlash` which returns `true` if a command\
was executed by *slash trigger*, otherwise it returns `false`.
