# Message Content Privileged Intents
**In April of 2022**, access to message content will become a Privileged Intent—like presence and guild member data—for developers with verified Discord bots.
> **Note:** We will roll-out more information on this topic, as Discord provides it. Most information in this article comes from [Discord's Developer Support Article](https://support-dev.discord.com/hc/en-us/articles/4404772028055).

### Notices
**This change affects only verified bots**, bots that are in 100 or more servers. **Unverified bots in fewer than 100 servers are not affected at all.**\
The transition period will begin fall of 2021, which means developers should begin to update their bots to reflect these new expectations.\
During (and after) the transition period, developers can apply for access to message content in the same manner they currently apply for other intents: via the [Developer Portal](https://discord.com/developers/docs/intro) during verification or by opening a [ticket](https://dis.gd/contact) after being verified.
At the end of this transition period, Discord will remove verified bots' access to message content if they have not been approved for the Privileged Intent.\
Over the past year, Discord has built out the Interactions API to bring new features like [Slash Commands](./guides/slashCommands.md), [Buttons](./guides/buttons.md), and [Select Menus](./guides/selectmenu.md) that don't require access to message content. We recommend that developers who haven't yet leveraged these new tools begin to do so over the next few months.

### General Information
If your bot is not approved for message content *(as a verified bot)*, the following properties of user's messages will be inaccessible:
- content
- embeds
- attachments
- components

Bots can still get the message content in the following cases, no matter what:
- Messages the bot sends
- Messages the bot receives in DMs
- Messages in which the bot is mentioned

To put it simply, you'll be able to know all the information about when someone sends a message, you just won't know what they said. You will still be able to get the time that the message was created and the message author.

> **These restrictions will not apply to messages received via a interaction (like buttons interactions)**

### BDFD's Interaction Support
- [Slash Commands](./guides/slashCommands.md): ✅
- [Buttons](./guides/buttons.md): ✅
- [Select Menus](./guides/selectmenu.md): ✅
- Context Menus: ❌
