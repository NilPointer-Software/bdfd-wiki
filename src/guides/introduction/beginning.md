# Beginning
In this guide you will learn how to create your own bot with BDFD.

## Content
[**Functions Used**](#functions-used) > [**Creating**](#step-1-creating) > [**Inviting**](#step-2-inviting) > [**First Code**](#step-3-first-code) > [**Bot Online**](#step-4-bot-online) > [**Test it!**](#step-5-test-it)

# Functions Used
- [`$nomention`](../../../../bdscript/nomention.md)
- [`$reply`](../../../../bdscript/reply.md)

# Step 1: Creating
- Go to [Discord Developer Portal](https://discord.com/developers/applications).
- Click on the *"New Application"* button and provide a name for your application.
- In top-left corner, click on the hamburger icon (`≡`) and select the *"Bots"* tab.
- Then, press the *"Add Bot"* button to create a discord bot.
- Once done, press the *"Reset Token"* button and copy your bot token.
> Never share your Discord bot token with anyone. *[Learn more](../../resources/security.md#sharing-tokens)*
- Now, open your BDFD app *(If you haven't installed the app yet, head over to [Play Store](https://play.google.com/store/apps/details?id=com.jakubtomana.discordbotdesinger)/[App Store](https://apps.apple.com/app/bot-designer-for-discord/id1495536477) and download it)* and press *"Create New Bot"*.
> Make sure that when you are creating a new bot, your Discord account is signed into the BDFD app. This is so that you don't lose access to your bot in the future.
- Enter your bot's name and its token *(the one that you copied earlier from the [Discord Developer Portal](https://discord.com/developers/applications))*.
- If you have a [share code](../other/sharecode.md), toggle on *"Use share code"* and put the code into the text field.
- After agreeing to the Terms of Service of both [BDFD](../terms.md) & [Discord](https://discord.com/terms), press "Create bot" to create your Discord bot.

# Step 2: Inviting
- Open the BDFD app and select your bot.
- Click on the *"Invite bot to server"* button.
- Press the *"Edit invite link permissions"* button and choose the permissions that the bot will have when joined the server.
- Then, click on the *"Add your bot to your server"* and selected the server.
- Click on the *"Continue"* button and your bot will be added to the server.

# Step 3: First Code
To create the first command, you must click on *"Commands"* in the selected bot and press on the *"+ Command creator"*.
You will see 3 categories ("Command Name", "Command Trigger", "Template Functions").
- Come up with a name for your command and paste it into the "Command  Name" field. (You can leave it blank).
- Now come up with a trigger for the command. (Example: `!ping`).
> It is important that the trigger of the command matches its meaning.
After completing the command setup, press the *"Create Command"* button. Now you can create your first code!
In "Reply Message" you can paste this code:
```
$nomention
$reply
Pong!
```
- Click on *"Save command"* to save the code.

# Step 4: Bot Online
### Method 1 - 30 Minutes
- Click on *"Dashboard"* in the selected bot and press on the *"+ Add free hosting time"* button.
- Enter the indicated numbers and click *"Confirm"*.
### Method 2 - 140 Minutes
- Press on *"Dashboard"* button in the selected bot and click on *"+ Watch ad for 90 minutes of free hosting time"*.
### Method 3 - Premium
- Use [premium](../../premium/introduction.md#purchasing-premium-points) points to get hosting time without ad.
> If the bot is not online after these methods, then take a look at this page. [Why my bot is offline?](../../resources/troubleshooting.md#the-bot-is-offline)

## Step 5: Test it!
Send a `!ping` command to the channel of the server you invited the bot to.

![example](https://github.com/Rainb0wKey/bdfd-wiki/assets/113303649/5a5eca33-6c2b-4e46-8283-a6312462f6f5)
