# Slash Commands
In this guide, we will learn more about implementing slash commands to your bot.

Slash commands are type of interactive application commands. It let's users to interact with your bot by typing `/<command name>`.

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
   - Choose `bot` & `application.commands` in scopes and desired bot permissions.
   - Copy the generated url below and invite your bot into your server.

- Method #2
   - Open BDFD app and select your bot.
   - Press `Add invite bot to server` button in dashboard tab.
   - Click `Edit invite link scopes` and enable *"Slash commands"* if its disabled.
   - Now, go back & press *"Add your bot to your server"*
   - Finally, invite the bot into your server.

## Creating a slash command
- Create or modify an existing command.
- Click *"Slash command trigger"*.
- Choose *"Enable global slash command"* or *"Enable guild slash command"* as per your preference.
- Fill-up necessary data and save it.

> 📝 Slash commands can have a maximum of 4000 characters _(combined name, description, and value properties)_ per slash.

#### Example

![Screenshot_20220717_170852](https://user-images.githubusercontent.com/95774950/179396882-832a7158-f3db-46f2-bf38-2f5a3125c201.png)
![Screenshot_20220717_170915](https://user-images.githubusercontent.com/95774950/179396889-d9891b2a-74dd-4454-97b5-75eee1d12db0.png)
![Screenshot_20220717_171511](https://user-images.githubusercontent.com/95774950/179396894-e8b8e0c7-fe73-4f0b-8787-d40f8d3df630.png)


## Slash options
Slash options are great way to get an user's input in slash commands.

To create a slash option,
- Open your slash command edit trigger page.
- Click *"Add"* button in `Options` section.
- Fill-up necessary data and save the changes.

> 📝 Slash commands can have upto maximum 25 options per slash.

### Slash options types

- Text - Accepts any string data input.
- Integer - Accepts only integer value input. For example: 3, -70 etc.
- Number - Accepts only number value input. For example: 5.3, -35, 23 etc.
- Boolean - Accepts either true or false input.
- User - It allows to mention any user.
- Channel - It allows to mention any channel.
- Role - It allows to mention any role.
- Mentionable - It allows to mention any user or role.
- Attachments - It allows to upload attachments.

### Retrieving value from options
To retrieve a value from an option, use  `$message[<option name>]`.

> 📝 If you want this function to work both in normal and slash command,\
then you can use `$message[<arg number>;<option name>]`.

#### Example

![Screenshot_20220717_175245](https://user-images.githubusercontent.com/95774950/179398313-cec8420e-942b-4184-8b8b-c813584cb420.png)
![Screenshot_20220717_175635](https://user-images.githubusercontent.com/95774950/179398322-d9a27169-0030-458d-8abc-ed4462637862.png)
![Screenshot_20220717_175649](https://user-images.githubusercontent.com/95774950/179398327-6c1f1c00-205f-4dcf-a0ce-08cefed5c937.png)

## Pre-defined choices

To create choices in options,
- In your slash command edit trigger page, create an option and fill-up the necessary data.
- Toggle *"Enabled"* in `Predefined choices` section.
- Then, click *"Add a new choice"* button.
- Type your choice name and value.
- Click *"Add"* and save the changes.

> 📝 A slash command can have upto maximum 25 choices per option.

### Retrieving choices
You can retrieve user's option choices using `$if` statements.

#### Format
```
$if[$message[<option name>]==<choice #1 value>]
      $c[Text/code here when user select 1st choice]
$elseif[$message[<option name>]==<choice #2 value>]
             $c[Text/code here when user select 2nd choice]
$endif
```

> ⚠️ Above code snippet requires BDScript 2 in order to execute since it contains `$elseif`.

#### Example
![Screenshot_20220717_194906](https://user-images.githubusercontent.com/95774950/179402684-17c15db5-fcd5-408d-9f20-86e31ccfbbb4.png)
![Screenshot_20220717_195016](https://user-images.githubusercontent.com/95774950/179402739-230b6b25-57a2-4c4f-bdad-2732ee988fbf.png)
![Screenshot_20220717_194125](https://user-images.githubusercontent.com/95774950/179402565-cc6bb202-7197-45cb-8b20-d44ca8080d27.png)
![Screenshot_20220717_194202](https://user-images.githubusercontent.com/95774950/179402575-a308ac57-6e29-4b83-8e8c-31970a508daa.png)
![Screenshot_20220717_194214](https://user-images.githubusercontent.com/95774950/179402578-608de95d-4799-4ca8-af70-dca9ca6769dd.png)
