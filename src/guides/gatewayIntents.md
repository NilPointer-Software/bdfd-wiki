# Gateway Intents
This guide will explain to you how to use Gateway Intents in BDFD, and what they are for.
If you are looking for general information about Discord's Gateway Intents, read it [here](https://discord.com/developers/docs/topics/gateway#gateway-intents).

## Enabling Gateway Intents
1. Before starting, make sure that you have installed a version of the app not lower than 2.2.2.
2. After that, follow the instruction below.

![Instruction](https://user-images.githubusercontent.com/70456337/199396053-706bc3a5-fc19-4f03-b40f-9cf13755750c.gif)


## Privileged Gateway Intents
### Presence Intent
Allows the bot to receive `PRESENCE_UPDATE` event. This intent is primarily used to retrieve current user's presence state. For example, Activities (i.e PLAYING, LISTENING), Presence (i.e Online, Idle) and Custom status.

Functions which requires this intent are as follows:
- [`$getCustomStatus[]`](../bdscript/getCustomStatus.md)
- [`$getUserStatus[]`](../bdscript/getUserStatus.md)
- [`$membersCount[]`](../bdscript/membersCount.md#second-usage)

### Server Members Intent
Allows the bot to receive `GUILD_MEMBER_ADD`, `GUILD_MEMBER_UPDATE, `GUILD_MEMBER_REMOVE`, and `THREAD_MEMBERS_UPDATE` events. This intent is primarily required to fetch entire list of guild members and getting specific guild member info (like guild joining, leaving, profile update etc.).

Callbacks which requires this intent are as follows:
- [`$onJoined[]`](../callbacks/onJoined.md)
- [`$onLeave[]`](../callbacks/onLeave.md)

### Message Content Intent
Required for the bot to receive information stored in the message (such as message content or embed data).\
It's also required for text commands to work, otherwise your bot can be based only on slash commands.
