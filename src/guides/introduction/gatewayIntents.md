# Gateway Intents
In this guide, you will learn about Discord's Gateway Intents and how to enable them in BDFD.

## What are Gateway Intents?
When a bot is connected to the [Discord Gateway](https://discord.com/developers/docs/topics/gateway), it receives events on actions happening on Discord.
Bots can receive a large amount of events from Discord, so in order to decrease the amount of events each bot receives, Discord requires bots to send Gateway Intents when connecting to the Gateway.\
Gateway Intents allow to specify which events the bot wants to receive.

Gateway Intents can be further divided into:
- Standard Intents[^1]
- [Privileged Intents](#privileged-gateway-intents)

For example, a bot needs to send the `GUILD_MESSAGES` standard intent and the `MESSAGE_CONTENT` privileged intent to receive the `MESSAGE_CREATE` event with the messsage content.

> 📚 Learn more about Gateway Intents [here](https://discord.com/developers/docs/topics/gateway#gateway-intents).

### Privileged Gateway Intents
Privileged Gateway Intents are special intents which need to be manually enabled in your bot application settings.
Due to their sensitive information nature, Discord disables them by default.
You should only enable them when it is required.

Currently, there are only 3 privileged gateway intents:
- [`GUILD_MEMBERS`](#server-members-intent)
- [`GUILD_PRESENCES`](#presence-intent)
- [`MESSAGE_CONTENT`](#message-content-intent)

> 📌 Verified bots require approval from Discord in order to enable these intents.

#### Presence Intent
Allows the bot to receive `PRESENCE_UPDATE` event.
This intent is primarily used to allow for retrieval of user presences data.
For example, Activities (i.e PLAYING, LISTENING), Presence (i.e Online, Idle) and Custom status.

The following functions require this intent:
- [`$getCustomStatus[]`](../../bdscript/getCustomStatus.md)
- [`$getUserStatus[]`](../../bdscript/getUserStatus.md)
- [`$membersCount[]`](../../bdscript/membersCount.md#second-usage)

#### Server Members Intent
Allows the bot to receive `GUILD_MEMBER_ADD`, `GUILD_MEMBER_UPDATE`, `GUILD_MEMBER_REMOVE`, and `THREAD_MEMBERS_UPDATE` events.
This intent is primarily required to fetch the entire list of guild members, and to receive specific guild member info (like guild joining, leaving, profile update etc.).

The following callbacks require this intent:
- [`$onJoined[]`](../../callbacks/onJoined.md)
- [`$onLeave[]`](../../callbacks/onLeave.md)

#### Message Content Intent
Unlike the two intents above, Message Content Intent doesn't allow for any new events.
Instead, it allows the bot to receive message content data, which includes `content`, `attachments`, `embeds`, and `components`.

If your bot is based on prefix-based commands, then this intent is required.
Otherwise, you will need to use [slash commands](../general/interactions/slashCommands/aboutSlashCommands.md) instead.

> 📌 Without this intent, your bot can only read message content data in DMs, messages where your bot was mentioned, and it's own messages.

The following functions/callbacks require this intent:
- [`$awaitedCommand[]`](../general/awaitedCommands.md)
- [`$messageContains[]`](../../premium/messageContains.md)
- [`$argsCheck`](../../bdscript/argsCheck.md)
- [`$banID`](../../bdscript/banID.md) (First & Second Usage)
- [`$getEmbedData`](../../bdscript/getEmbedData.md)
- [`$getMessage`](../../bdscript/getMessage.md) (Only for `content` type)
- [`$ignoreTriggerCase`](../../premium/ignoreTriggerCase.md)
- [`$message`](../../bdscript/message.md)
- [`$noMentionMessage`](../../bdscript/noMentionMessage.md)
- [`$removeContains`](../../bdscript/removeContains.md)
- [`$trimContent`](../../bdscript/trimContent.md)
- [`$unban`](../../bdscript/unban.md)
- [`$unbanID`](../../bdscript/unbanID.md#usage-1)

## Enabling Privileged Gateway Intents
To enable Privileged Gateway Intents in your bot, follow these steps:

1. Open your bot dashboard in the BDFD app (Make sure your app version is `2.2.2` or above).
2. Click on the "Settings" tab, and then on "Go to gateway intents settings".
3. After that, click on "Change gateway intents on Developer Portal".
4. Select your required intents and save the changes.

    > 📌 The intents you have enabled in the Developer portal should be reflected in the BDFD app. If they aren't, click on "Sync intents with Developer Portal settings".

### Example
![Instruction](https://user-images.githubusercontent.com/70456337/199396053-706bc3a5-fc19-4f03-b40f-9cf13755750c.gif)

[^1]:  We will not be discussing about Standard Intents here, since it isn't required and is auto-handled by BDFD internally. If you still want to learn more about it, feel free to check [Discord Docs](https://discord.com/developers/docs/topics/gateway#gateway-intents).
