# $onLeave
Triggered when a user leaves the server.

## Example
a. Make the command trigger `$onLeave[CHANNEL ID]`.
> Channel IDs are not channel names! Please provide a [channel ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).

![image](https://user-images.githubusercontent.com/69215413/118005256-3b469300-b318-11eb-8664-9ba03bcd537d.png)

b. Input your reply message/code.

![image](https://user-images.githubusercontent.com/69215413/118005506-721ca900-b318-11eb-8894-4a299290a1cd.png)

c. Now you have a leave message!
![image](https://user-images.githubusercontent.com/69215413/118005457-67faaa80-b318-11eb-94c0-dbb96bdb7577.png)

## Troubleshooting
1: You must have at least version 1.17.9 of the app.

2: Go to [Discord Developer Portal](https://discord.com/developers/applications) then open your bot's page and enable member intents.

![image](https://user-images.githubusercontent.com/69215413/118007092-d1c78400-b319-11eb-8066-4f26c564f673.png)
![image](https://user-images.githubusercontent.com/69215413/118007181-e86ddb00-b319-11eb-958a-6f22e93b253f.png)


3: Open the app and go to bot settings then enable member intents.
![image](https://user-images.githubusercontent.com/69215413/118007228-f3c10680-b319-11eb-94f0-3a9a6ba978b7.png)
![image](https://user-images.githubusercontent.com/69215413/118007256-fb80ab00-b319-11eb-9429-656f0ab87ad2.png)
![image](https://user-images.githubusercontent.com/69215413/118007288-04717c80-b31a-11eb-8899-325d41c9003a.png)

> Note: Enabled intents in the app should reflect the intents enabled in Discord's dashboard.  For example: If you have members intent enabled in Discord's dashboard then you should respectively enable them in the app (unless you don't want to use them at all).

4: Make sure `$onLeave[CHANNEL ID]` is inputted in the 'command trigger' field and has the correct usage.

5: Make sure your bot has permission to speak in the channel provided in `$onLeave[]`.

6: You can not use more that 1 `$onLeave[]` trigger per bot.

## Advanced
Both free and premium users can use `$onLeave[]`. Also, all users can put `$getServerVar[]` within `$onLeave[]`. However, free users can not use `$getServerVar[]` outside of callbacks.

If you own a global bot and want to make it so multiple different servers can use `$onLeave[]`. Follow these steps:

1: Make a variable named "leave" and the value set to nothing.

2: Make a command for setting the leave channel. Then put the following in your code/reply text:
```
$setServerVar[leave;$mentionedChannels[1]]
$argsCheck[>1;Please mention a channel!]
```

> Note: Servers will need to setup the channel they want the leave message to send to. (by running a command with the code above).

3: Now replace $onLeave[CHANNEL ID] in your leave command trigger, with `$onLeave[$getServerVar[leave]]` and your all set!
