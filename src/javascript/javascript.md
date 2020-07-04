# JavaScript
Bot Designer for Discord allows you to use JavaScript *(ES2015)*.\
Discord's API is not fully supported yet but there will be more extensive
support in the future.

__(NOTE: Callbacks don't support JavaScript at the moment)__

## Available objects in the commands:
- `message` - string value. It contains message written by the user.
- `commandPrefix` - string value. It contains name of the used command.
- `authorId` - string value. It contains **ID of the user** that executed that command. 
- `channelId` - string value. It contains **ID of the channel** where the command was used.
- `userMentions` - array of string values. It contains user mentions *(pings)*.
- `roleMentions` - array of string values. It contains role mentions *(pings)*.

## Currently supported API functions:
- `setResponse(replyText)`\
where `replyText` is a string value. This command will send message to the channel from
which command was used.
- `setEmbedResponse(title, description, footer)`\
where `title`, `description`, `footer` are string values. This command will send embedded
message to the channel from which command was used.
- `setEmbedImage(imageURL)`\
where `imageURL` is a string value. This command sets image of the embedded message.
`imageURL` has to point to the direct url of the image.
- `ban(userID)`\
where `userID` is a string value.
- `banWithReason(userID, reason)`\
where `userID` and `reason` are the string value.
- `unban(userID)`\
where `userID` is a string value.
- `kick(userID)`\
where `userID` is a string value.
- `kickWithReason(userID, reason)`\
where `userID` and `reason` are the string value.
- `giveRole(userID, roleID)`\
where `userID` and `roleID` are the string value. This command gives the role to the user.
- `takeRole(userID, roleID)`\
where `userID` and `roleID` are the string value. This command takes the role from the user.
- `channelTyping()`\
Shows *"Bot is typing..."* message
- `createChannel(name, type)`\
where `name` and `type` are the string values.
`type` value can be either equal to `"text"` or `"voice"`.
Providing wrong `type` will result in throwing an exception which you can catch.
- `removeChannel(chanID)`\
where `chanID` is a string value.
- `pinMessage(channelID, messageID)`\
where `channelID` and `messageID` are the string values.
- `unpinMessage(channelID, messageID)`\
where `channelID` and `messageID` are the string values.
- `sendChannelMessage(channelID, message)`\
where `channelID` and `messageID` are the string values. Sends message to the provided channel.
