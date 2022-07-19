# Discord's ID System
Discord's ID System allows bot's to manage and use IDs to get/edit object data (e.g. returning user's name, deleting a role, etc).

### What's A ID?
A ID is a Discord object identifier. Let's break this down:
- A 'object' refers to a Discord channel, role, user, server/guild, etc.
- A 'identifier' (typically called 'ID') refers to the multi-digit number that the object belongs to.

### Enabling Developer Mode
In order to access and copy IDs in the Discord client, you must enable developer mode. Here's how:

- **Desktop**

    ![ex1](https://user-images.githubusercontent.com/69215413/125985126-43a85702-0dd5-4173-8441-671702d845af.png)

    ![ex2](https://user-images.githubusercontent.com/69215413/125985082-7968aad1-c47e-45cf-8af2-c441420565b8.png)

    ![ex3](https://user-images.githubusercontent.com/69215413/125985079-3350556a-f890-4259-af4f-1ba1cb598029.png)

- **Mobile**

   For Android users, go to User Settings > App Settings > Behavior and turn on Developer Mode. For iOS you’ll head to User Settings > Appearance > Advanced and turn on Developer Mode.

   ![ex4](https://user-images.githubusercontent.com/69215413/125985535-55e42f16-68e9-46a2-bb2a-75b5a65b7053.png)

### Finding IDs
*Where do I find these 'IDs'?*

You can use '[Functions That Return IDs](#functions-that-return-ids)' to retrieve IDs.

If you want to get IDs using your client, check out [Discord's full guide on getting IDs!](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)

### Using IDs in Commands

There are alot of functions that use IDs. Like, `$deleteChannels`, `$modifyRole` `$banID`, and many more.

Let's use `$deleteChannels` for this example. In order to delete a channel, we need the channel's ID. Here's how `$deleteChannels` could look:
```
$deleteChannels[320949943877437847]
$c[Deletes the provided custom channel ID.]

$deleteChannels[$channelID]
$c[Deletes the channel where the command was ran.]

$deleteChannels[$mentionedChannels[1]]
$c[Deletes the mentioned channel.]
```

> 🧙‍♂️ Be careful not to mix up ID types. For example, you can't do `$deleteChannels[$authorID]`. This is because `$authorID` returns a user ID, not a channel ID.

### Functions That Return IDs
- `$authorID`/`$userID`/`$roleID`/`$channelID`
- `$findUser`/`$findChannel`/`$findRole`
- `$mentioned`/`$mentionedChannels`/`$mentionedRoles`
- ... *(a few others)*

### Using IDs For Mentions
- Mentioning a User - `<@userID>`
- Mentioning a Role - `<@&roleID>`
- Mentioning a Channel - `<#channelID>`
- Using a Emoji - `<:emojiName:emojiID>`
- Mentioning a Guild - Guilds can't be mentioned. 

> 🧙‍♂️ Non-bots can use IDs to mention objects too!
