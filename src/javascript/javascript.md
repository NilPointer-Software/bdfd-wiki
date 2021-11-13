# JavaScript
*(for advanced users)*

> **Warning:** JavaScript is depreacted, meaning no additional features are planned for it.

### Index
- [Notes](https://nilpointer-software.github.io/bdfd-wiki/javascript/javascript.html#notes)
- [Accessing JavaScript](https://nilpointer-software.github.io/bdfd-wiki/javascript/javascript.html#accessing-javascript)
- [Available Objects in Commands](https://nilpointer-software.github.io/bdfd-wiki/javascript/javascript.html#available-objects-in-commands)
- [Supported API Functions](https://nilpointer-software.github.io/bdfd-wiki/javascript/javascript.html#supported-api-functions)
- [Example](https://nilpointer-software.github.io/bdfd-wiki/javascript/javascript.html#example)

## Notes
- Bot Designer for Discord allows you to use JavaScript *(ES2015)*.
- Discord's API is not fully supported.
- Callbacks don't support JavaScript at the moment.

## Accessing JavaScript
1: Go to user settings in the BDFD app, and enable "Features for Advanced Users".

![jswiki1](https://user-images.githubusercontent.com/69215413/122846929-e01f9d00-d2d4-11eb-9e76-80981877b6ab.png)

![jswiki2](https://user-images.githubusercontent.com/69215413/122846695-67204580-d2d4-11eb-8cfd-a3c679c66ca0.png)

2: After to creating a new command, set the Scripting Language to "JavaScript".

![jswiki3](https://user-images.githubusercontent.com/69215413/122846765-87e89b00-d2d4-11eb-84d9-72706b2fd466.png)

![jswiki4](https://user-images.githubusercontent.com/69215413/122846781-92a33000-d2d4-11eb-9ef7-c645e48e1dc7.png)

## Available Objects in Commands
Name      | Type       | Description
----------|:----------:|----------
| `message` | string | Contains author's message.
| `commandPrefix` | string | Contains the trigger of this command.
| `authorId` | string | Contains the ID of the user that executed this command. 
| `channelId` | string | Contains channel ID where the command was used.
| `userMentions` | array of string values | Contains user mentions.
| `roleMentions` | array of string values | Contains role mentions.

## Supported API Functions
Name      |Description
----------|----------
| `setResponse(replyText)` | Where `replyText` is a string value. Sends a message to the channel where the command was used.
| `setEmbedResponse(title, description, footer)` | Where `title`, `description`, `footer` are string values. Sends a embedded message to the channel where the command was used.
| `setEmbedImage(imageURL)` | Where `imageURL` is a string value. Sets image of the embedded message.
| `ban(userID)`|  Where `userID` is a string value. Bans a user.
| `banWithReason(userID, reason)` | Where `userID` and `reason` are string values. Bans a user with reason.
| `unban(userID)` | Where `userID` is a string value. Unbans the user.
| `kick(userID)` |  Where `userID` is a string value. Kicks a user.
| `kickWithReason(userID, reason)` | Where `userID` and `reason` are string values. Kicks a user with reason.
| `giveRole(userID, roleID)` | Where `userID` and `roleID` are string values. Gives a role to the user.
| `takeRole(userID, roleID)` | Where `userID` and `roleID` are string values. Removes a role from the user.
| `channelTyping()` | Shows *"Bot is typing..."* message.
| `createChannel(name, type)` | Where `name` and `type` are string values (`type` must be `text` or `voice`). Creates a channel. Providing wrong `type` will result in throwing an exception which you can catch.
| `removeChannel(channelID)` | Where `channelID` is a string value. Deletes a channel.
| `pinMessage(channelID, messageID)` | Where `channelID` and `messageID` are string values. Pins a message.
| `unpinMessage(channelID, messageID)` | Where `channelID` and `messageID` are string values. Unpins a pinned message.
| `sendChannelMessage(channelID, message)` | Where `channelID` and `message` are string values. Sends `message` to the provided channel. 

## Example
*(say command)*
```js
var text = message.replace(commandPrefix, " ") // Makes 'text' the user's message without the command trigger.
setResponse(text) // Sets the response as 'text'.
```
![image](https://user-images.githubusercontent.com/69215413/122844455-b748d900-d2cf-11eb-9bf5-9887b2323295.png)