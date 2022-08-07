# Gateway Intents
This guide will explain to you how to use Gateway Intents in BDFD, and what they are for.
If you are looking for general information about Discord's Gateway Intents, read it [here](https://discord.com/developers/docs/topics/gateway#gateway-intents).

## How to enable Gateway Intents
Gateway Intents must be enabled in the Discord Developer Portal and in the BDFD app for them to work.
### Discord Developer Portal
1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and select your application.
2. Go to the "Bot" tab.
3. Scroll down and enable the Gateway Intents you are interested in.
4. Save changes.

![DDP](https://user-images.githubusercontent.com/70456337/183294128-52e5a4e4-f833-49dd-8bee-1ebec7c2c999.gif)


### BDFD App
1. Open the app and select your bot.
2. Go to the "Settings" tab.
3. Scroll down and enable the Gateway Intents you are interested in.
4. Save changes.

![BDFD](https://user-images.githubusercontent.com/70456337/183294156-4ecc60b0-7112-4bf3-b833-39b8c2004fc6.gif)

## Use of Gateway Intents
### Presence Intent
Required for the functions [`$membersCount[]`](../bdscript/membersCount.md#second-usage) and [`$getUserStatus[]`](../bdscript/getUserStatus.md) to work.
### Server Members Intent
Required for some callbacks to work (e.g. for [`$onJoined[]`](../callbacks/onJoined.md))
### Message Content Intent
Required for text commands to work if your bot is verified. Without this intent, your bot can only be based on slash commands.
