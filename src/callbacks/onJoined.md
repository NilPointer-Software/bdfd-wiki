# $onJoined
When a user joins the server, the bot sends a message.

## Example: $onJoined
a. Make the command trigger `$onJoined[CHANNEL ID]`.
![image (3)](https://user-images.githubusercontent.com/69215413/113422963-a3aa6800-939b-11eb-8b52-e8ac351805e3.png)

b. Input your code/reply text.
![image (4)](https://user-images.githubusercontent.com/69215413/113423045-ca689e80-939b-11eb-9398-861061411f00.png)

c. Now you have a welcome message!.
![image (5)](https://user-images.githubusercontent.com/69215413/113423244-19163880-939c-11eb-8315-f998f395d402.png)

## Troubleshooting
#### Is $onJoined bugged or not working? 

1) You must have at least version `1.17.9` of the app.

2) Go to [Discord Developer Portal](https://discord.com/developers/applications) open your bot page and enable member intents.

![image](https://user-images.githubusercontent.com/69215413/113423563-b83b3000-939c-11eb-8a71-8eaa53d20f2d.png) 

![image](https://user-images.githubusercontent.com/69215413/113423634-d6089500-939c-11eb-8d2c-083ac87ff66b.png)

3) Open app and go to bot settings then enable Member intents. 

![image](https://user-images.githubusercontent.com/69215413/113425202-7495f580-939f-11eb-8446-9dccb3e0a848.png)

![image](https://user-images.githubusercontent.com/69215413/113424859-dace4880-939e-11eb-91de-503252c8a51e.png)

![image](https://user-images.githubusercontent.com/69215413/113423734-fafd0800-939c-11eb-8ea7-3394c99ca86b.png)

>**Note:** Enabled intents in the app should reflect the intents enabled in Discord's dashboard.\
**For example:** If you have `members intent` enabled in Discord's dashboard then you should respectively
enable them in the app *(unless you don't want to use them at all)*. Don't enable more intents than it's possible
for the bot, if you do so, all intents will be automaticaly disabled in the app.

4) Create a command with `$onJoined[CHANNEL ID]` as trigger and write something in code. 

![image](https://user-images.githubusercontent.com/69215413/113423759-09e3ba80-939d-11eb-95c2-1fe7860f3887.png)

**Note:** Channel IDs are not channel names! Provide a [channel ID](https://user-images.githubusercontent.com/69215413/113424405-19afce80-939e-11eb-959c-6dc9a095756c.png)!

5) Make sure your bot has permission to speak in the channel provided in `$onJoined[]`.

## Advanced
Both free and premium users can use `$onJoined[]`. Also, all users can put `$getServerVar[]` within `$onJoined[]`. However, free users can not use `$getServerVar[]` outside of callbacks. 

If you own a global bot and want to make it so multiple different servers can use `$onJoined[]`. Follow these steps:

1: Make a variable named "`welcome`" and the value set to nothing.

2: Make a command for setting the welcome channel. Then put the following in your code/reply text:
```
$setServerVar[welcome;$mentionedChannels[1]]
$argsCheck[>1;Please mention a channel!]
```

3: Now replace your `$onJoined[CHANNEL ID]` in your welcome command trigger, with `$onJoined[$getServerVar[welcome]]` and your all set!
