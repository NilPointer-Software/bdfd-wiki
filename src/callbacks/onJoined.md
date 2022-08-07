# $onJoined
*When a user joins the server, the command is triggered.*

`$onJoined[channelID]` is a callback, which means it's used in the command trigger *(not the code)*. The command is ran when a user joins the server. You must replace 'channelID' with a [valid channel ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).

## Example
1. Make the command trigger `$onJoined[channelID]`.\
![example1](https://user-images.githubusercontent.com/69215413/129490506-c91a77b7-ed71-4dc5-9460-d4ec409b36d4.png)

2. Input your code/reply text.
    > 🧙‍♂️ You can use functions like `$username`, `$authorAvatar`, `$authorID`, `$membersCount`, `$serverName[$guildID]` here.

    ![example2](https://user-images.githubusercontent.com/69215413/129490390-98471c1a-6d76-4543-96d1-1f428bfdd8bc.png)

3. Now, you have a welcome message! ✨\
![example3](https://user-images.githubusercontent.com/69215413/129490365-d995c6d6-bbfc-4e37-a726-31f505023988.png)

*Not Working? Check out the [Troubleshooting](#troubleshooting) section.*

## Troubleshooting
#### Is $onJoined[] bugged or not working? 

- You must have at least version `1.17.9` of the app.

- Go to [Discord Developer Portal](https://discord.com/developers/applications) and select your bot. Then, click on bot's tab and enable Member Intents.\
![image](https://user-images.githubusercontent.com/69215413/113423563-b83b3000-939c-11eb-8a71-8eaa53d20f2d.png)\
![image](https://user-images.githubusercontent.com/69215413/113423634-d6089500-939c-11eb-8d2c-083ac87ff66b.png)

- Open BDFD app and select your bot. Go to bot settings and enable Member Intents.\
![image](https://user-images.githubusercontent.com/69215413/129490310-1653423f-455a-462e-82cb-43a13fa5d899.png)\
![image](https://user-images.githubusercontent.com/69215413/129490262-01fbcaac-aa28-4d8a-9ff1-3391d8b78f29.png)\
![image](https://user-images.githubusercontent.com/69215413/129490261-bdaf1dab-f3d0-4635-92cc-2aa4af02df59.png)

> 📝 Enabled intents in the app should reflect the intents enabled in the Discord Developer Portal.\
**For example:** If you have `Members Intent` enabled in the Discord Developer Portal then you should respectively
enable them in the app *(unless you don't want to use them at all)*.

- Make sure, `$onJoined[channelID]` is written in the 'command trigger' field and not in the code.\
![image](https://user-images.githubusercontent.com/69215413/113423759-09e3ba80-939d-11eb-95c2-1fe7860f3887.png)

- Make sure your bot has `VIEW_CHANNEL`, `EMBED_LINKS`, `SEND_MESSAGES` permission in the channel provided in `$onJoined[]`, and that you inputted a valid channel ID.
- Also, make sure you don't have more than 1 `$onJoined[]`.

## Advanced
### Per-Server $onJoined
Both free and premium users can use `$onJoined[]`, and all users can put `$getServerVar[]` within `$onJoined[]`. However, non-premium users can not use `$getServerVar[]` outside of callbacks.\
If you own a public bot and want to make it so multiple different servers can use `$onJoined[]` *(e.g. set their own welcome channel)*, follow these steps:

1. Make a variable named "`welcome`" and the value set to nothing.\
![image](https://user-images.githubusercontent.com/69215413/129489884-9338482c-ab9f-4847-ba01-c618ab746091.png)

2. Make a command for setting the welcome channel, then put the following in your code:
    ```
   $nomention
   $onlyAdmin[You need the admin permission to use that!]
   $argsCheck[>1;Please mention a channel!]
   Welcome channel updated!
   $setServerVar[welcome;$mentionedChannels[1]]
   ```

    > 📝 Servers will need to setup the channel they want the welcome message to send to *(by running a command with the code above)*.

3. Now replace `$onJoined[channelID]` in your welcome command trigger, with `$onJoined[$getServerVar[welcome]]` and you're all set!
