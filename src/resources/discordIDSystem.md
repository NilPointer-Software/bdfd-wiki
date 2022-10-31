# Discord's ID System
Discord's ID System allows bot's to manage and use IDs to get/edit object data *(e.g. returning user's name, deleting a role etc).*

### What's an ID?
An ID is a Discord object identifier. Let's break this down:
- An 'object' refers to a Discord channel, role, user, server/guild, etc.
- An 'identifier' (typically called 'ID') refers to the multi-digit number that the object belongs to.

### Enabling Developer Mode
In order to access and copy IDs in the Discord client, you must enable developer mode. Here's how:

- **Desktop**

    ![ex1](https://user-images.githubusercontent.com/116581988/199096924-0aff5394-5b58-4c16-b9fd-fe744dd48669.png)

    ![ex2](https://user-images.githubusercontent.com/116581988/199097049-49fd06e2-29e9-40a6-900f-009c3b5897db.png)

    ![ex3](https://user-images.githubusercontent.com/116581988/199097113-91a52937-af03-430b-a58e-d1b561b1debb.png)

- **Mobile**

   Go to User Settings > Appearance > Advanced and turn on Developer Mode.

   ![ex4](https://user-images.githubusercontent.com/116581988/199097168-e304e814-53ba-4015-a7a4-4b5ff72bf7f4.png)

### Finding IDs
*Where do I find these 'IDs'?*

You can use '[Functions That Return IDs](#functions-that-return-ids)' to retrieve IDs.

If you want to get IDs using your client, check out [Discord's full guide on getting IDs!](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)

### Using IDs in Commands

There are a lot of functions that use IDs. Like, `$deleteChannels`, `$modifyRole` `$banID`, and many more.

Let's use `$deleteChannels` for this example. In order to delete a channel, we need the channel's ID. Here's how `$deleteChannels` could look:
```
$deleteChannels[320949943877437847]
$c[Deletes the provided custom channel ID.]

$deleteChannels[$channelID]
$c[Deletes the channel where the command was ran.]

$deleteChannels[$mentionedChannels[1]]
$c[Deletes the mentioned channel.]
```

> ⚠️ Be careful not to mix up ID types. For example, you can't do `$deleteChannels[$authorID]`. This is because `$authorID` returns a user ID, not a channel ID.

### Functions That Return IDs
- `$authorID`/`$userID`/`$roleID`/`$channelID`
- `$findUser`/`$findChannel`/`$findRole`
- `$mentioned`/`$mentionedChannels`/`$mentionedRoles`
- ... *(a few others)*

### Using IDs For Mentions
- Mentioning an User - `<@userID>`
- Mentioning a Role - `<@&roleID>`
- Mentioning a Channel - `<#channelID>`
- Using an Emoji
    - Static - `<:emojiName:emojiID>`
    - Animated - `<a:emojiName:emojiID>`
- Mentioning a Slash
    - Normal - `</name:commandID>`
    - Subcommand - `</name subcommandName:commandID>`
    - Subcommand group - `</name subcommandGroup subcommandName:commandID>`
- Mentioning a Guild - Guilds can't be mentioned. 

> 📝 Non-bots can use IDs to mention objects too!
