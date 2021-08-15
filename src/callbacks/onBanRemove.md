# $onBanRemove
*Triggered when a user gets unbanned from the server.*\
`$onBanRemove[channelID]` is a callback, which means it's used in the command trigger *(not the code)*. The command is ran when a user is unbanned from the server. You must replace 'channelID' with a [valid channel ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) or a server variable that holds the channelID (`$getServerVar[]`).

## Example
**#1:** Make a command with `$onBanRemove[channelID]` as the trigger.
> 🧙‍♂️ You must replace 'channelID' with a [valid channel ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)!

![example1](https://user-images.githubusercontent.com/69215413/129492147-3d51dd5c-9628-43f7-a175-faed03442501.png)

**#2:** Input your code/reply text.\
![example2](https://user-images.githubusercontent.com/69215413/129492022-8acd4877-638c-4855-8970-13dab37b032e.png)

**#3:** Now you have a unban message! ✨\
![example3](https://user-images.githubusercontent.com/69215413/129492076-8f6ec738-096d-4abf-af8b-678a50ad4c5b.png)
