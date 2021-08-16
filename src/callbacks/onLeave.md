# $onLeave
*When a user leaves the server, the command is triggered.*\
`$onLeave[channelID]` is a callback, which means it's used in the command trigger *(not the code)*. The command is ran when a user leaves the server. You must replace 'channelID' with a [valid channel ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).

## Example
**#1:** Make the command trigger `$onLeave[channelID]`.

![example1](https://user-images.githubusercontent.com/69215413/129492818-7aca8563-baff-4ebb-b82b-5a1a368339e5.png)

**#2:** Input your code/reply text.
> 🧙‍♂️ You can use functions like `$username`, `$authorAvatar`, `$authorID`, `$membersCount`, `$serverName[$guildID]` here.

![example2](https://user-images.githubusercontent.com/69215413/129492763-1261a971-4d4c-4f33-9e78-757595484672.png)

**#3:** Now you have a leave message! ✨\
![example3](https://user-images.githubusercontent.com/69215413/129492739-3019099d-e2d9-4c94-97b8-65190760cbf4.png)\
*Not Working? Check out the [Troubleshooting](#troubleshooting) section.*

## Troubleshooting
#### Is $onLeave bugged or not working? 

**#1:** You must have atleast version `1.17.9` of the app.

**#2:** Go to [Discord Developer Portal](https://discord.com/developers/applications), go to your bot's page, and enable Member Intents.\
![image](https://user-images.githubusercontent.com/69215413/113423563-b83b3000-939c-11eb-8a71-8eaa53d20f2d.png)\
![image](https://user-images.githubusercontent.com/69215413/113423634-d6089500-939c-11eb-8d2c-083ac87ff66b.png)

**#3:** Open app and go to bot settings, then enable Member Intents.\
![image](https://user-images.githubusercontent.com/69215413/129490310-1653423f-455a-462e-82cb-43a13fa5d899.png)\
![image](https://user-images.githubusercontent.com/69215413/129490262-01fbcaac-aa28-4d8a-9ff1-3391d8b78f29.png)\
![image](https://user-images.githubusercontent.com/69215413/129490261-bdaf1dab-f3d0-4635-92cc-2aa4af02df59.png)

> **Note:** Enabled intents in the app should reflect the intents enabled in the Discord Developer Portal.\
**For example:** If you have `members intent` enabled in the Discord Developer Portal then you should respectively
enable them in the app *(unless you don't want to use them at all)*.

**#4:** Make sure `$onLeave[channelID]` is inputted in the 'command trigger' field, not the code.\
![image](https://user-images.githubusercontent.com/69215413/113423759-09e3ba80-939d-11eb-95c2-1fe7860f3887.png)

**#5:** Make sure your bot has the `VIEW_CHANNEL`, `EMBED_LINKS`, `SEND_MESSAGES` permission in the channel provided in `$onLeave[]`, and that you inputted a valid channel ID.

## Advanced
### Per-Server $onLeave
Both free and premium users can use `$onLeave[]`, and all users can put `$getServerVar[]` within `$onLeave[]`. However, non-premium users can not use `$getServerVar[]` outside of callbacks.\
If you own a public bot and want to make it so multiple different servers can use `$onLeave[]` *(e.g. set their own leave message channel)*, follow these steps:

**#1:** Make a variable named "`leave`" and the value set to nothing.\
![image](https://user-images.githubusercontent.com/69215413/129492681-5a50ca36-a76d-4add-a4d9-a64c29d0ed33.png)

**#2:** Make a command for setting the leave channel, then put the following in your code:
```
$nomention
$onlyAdmin[You need the admin permission to use that!]
$argsCheck[>1;Please mention a channel!]
Leave channel updated!
$setServerVar[leave;$mentionedChannels[1]]
```
> **Note:** Servers will need to setup the channel they want the leave message to send to *(by running a command with the code above)*.

**#3:** Now replace `$onLeave[channelID]` in your leave command trigger, with `$onLeave[$getServerVar[leave]]` and you're all set!
