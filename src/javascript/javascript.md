# JavaScript
*(for advanced users)*

### Index
- [Notes](https://nilpointer-software.github.io/bdfd-wiki/javascript/javascript.html#notes)
- [Accessing JavaScript](https://nilpointer-software.github.io/bdfd-wiki/javascript/javascript.html#accessing-javascript)
- [Available Objects in Commands](https://nilpointer-software.github.io/bdfd-wiki/javascript/javascript.html#available-objects-in-commands)
- [Supported API Functions](https://nilpointer-software.github.io/bdfd-wiki/javascript/javascript.html#supported-api-functions)
- [Example](https://nilpointer-software.github.io/bdfd-wiki/javascript/javascript.html#example)

## Notes
- Bot Designer for Discord allows you to use JavaScript *(ES2015)*.
- Discord's API is not fully supported yet but there will be more extensive
support in the future.
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
Name      | Value Types       | Description
----------|:----------:|----------
| `setResponse(replyText)` | replyText - string | Sends a message to the channel where the command was used.
| `setEmbedResponse(title, description, footer)` | title, description, footer - string | Sends a embedded message to the channel where the command was used.
| `setEmbedImage(imageURL)` | imageURL - string | Sets image of the embedded message.
| `ban(userID)`| userID - string | Bans a user.
| `banWithReason(userID, reason)` | userID & reason - string | Bans a user with reason.
| `unban(userID)` | userID  - string | Unbans the user.
| `kick(userID)` | userID - string | Kicks a user.
| `kickWithReason(userID, reason)` | userID & reason - string | Kicks a user with reason.
| `giveRole(userID, roleID)` | userID & roleID - string | Gives a role to the user.
| `takeRole(userID, roleID)` | userID & roleID - string | Takes a role from the user.
| `channelTyping()` | | Shows *"Bot is typing..."* message
| `createChannel(name, type)` | name & type - string (`type` must be `text` or `voice`) | Creates a channel. Providing wrong `type` will result in throwing an exception which you can catch.
| `removeChannel(chanID)` | chanID - string | Deletes a channel.
| `pinMessage(channelID, messageID)` | channelID & messageID - string | Pins a message.
| `unpinMessage(channelID, messageID)` | channelID & messageID - string | Unpins a pinned message.
| `sendChannelMessage(channelID, message)` | channelID & message - string | Sends `message` to the provided channel.

## Example
*(say command)*
```js
var text = message.replace(commandPrefix, " ") // Makes 'text' the user's message without the command trigger.
setResponse(text) // Sets the response as 'text'.
```
![image](https://user-images.githubusercontent.com/69215413/122844455-b748d900-d2cf-11eb-9bf5-9887b2323295.png)


