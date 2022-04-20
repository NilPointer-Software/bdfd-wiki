# Using Emojis
In *Bot Designer for Discord*, we use emoji IDs to use emojis in messages.

> **Warning:** [Before following this guide, you must enable Discord's Developer Mode option in user settings. (click-me for more info)](./developerMode.md)

### Prerequisites
- Your bot must have the `USE_EXTERNAL_EMOJIS` permission to use emojis from other servers.
- The bot must have access to the emoji provided, meaning the bot must be present in the server with the emoji.

### Tutorial
**#1:** Type `\:emojiName:`

**#2:** Send the message.

**3:** Copy the ID it returns.

**4:** Paste the emoji ID into the place you want it in your code.

Here's a video example:

![](https://imgur.com/xN7YS3T.gif)

### Alternatives
You can use `$customEmoji[emojiName]` to use custom emojis as well, but if multiple servers your bot is in have a emoji with the same name, then it may return the wrong emoji. Therefore, this method not as stable as emoji IDs.