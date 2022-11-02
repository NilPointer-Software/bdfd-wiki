# Gateway Intents
This guide will explain to you how to use Gateway Intents in BDFD, and what they are for.
If you are looking for general information about Discord's Gateway Intents, read it [here](https://discord.com/developers/docs/topics/gateway#gateway-intents).

## Enabling Gateway Intents
1. Before starting, make sure that you have installed a version of the app not lower than 2.2.2.
2. After that, follow the instruction below.

![Instruction](https://user-images.githubusercontent.com/70456337/199396053-706bc3a5-fc19-4f03-b40f-9cf13755750c.gif)


## Use of Gateway Intents
### Presence Intent
Required for the functions [`$membersCount[]`](../bdscript/membersCount.md#second-usage), [`$getUserStatus[]`](../bdscript/getUserStatus.md), and [`$getCustomStatus[]`](../bdscript/getCustomStatus.md) to work.\
Allows bot to get information about users in the guild (such as current status).

### Server Members Intent
Required for some callbacks to work (e.g. for [`$onJoined[]`](../callbacks/onJoined.md)).\
Allows bot to get a list of users in the guild.

### Message Content Intent
Required for the bot to receive information stored in the message (such as message content or embed data).\
It's also required for text commands to work, otherwise your bot can be based only on slash commands.
