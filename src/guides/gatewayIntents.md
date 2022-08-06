# Gateway Intents
This guide will tell you about the use of Gateway Intents in BDFD, what they are for.
If you were looking for general information about Gateway Intents in Discord, read it [here](https://discord.com/developers/docs/topics/gateway#gateway-intents).

## How to enable Gateway Intents
Gateway Intents must be enabled in the Discord Developer Portal and in the BDFD app for them to work.
### Discord Developer Portal
1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and select your application.
2. Go to the "Bot" tab
3. Scroll down and enable the Gateway Intents you are interested in.
4. Save changes. \
![DDP](https://i.imgur.com/BfNpsXe.mp4)
### BDFD APP
1. Open your bot.
2. Go to the "Settings" tab.
3. Scroll down and enable the Gateway Intents you are interested in.
4. Save changes. \
![BDFD](https://i.imgur.com/qAEdAOf.mp4)

## Use of Gateway Intents
### Presence Intent
Required for the functions [`$membersCount[]`](./bdscript/membersCount.md#second-usage) and [`$getUserStatus[]`](./bdscript/getUserStatus.md) to work.
### Server Members Intent
Required for some callbacks to work (e.g. for [`$onJoined[]`](./callbacks/onJoined.md))
