# $onMessageDelete
*Triggered when a user deletes a message.*

`$onMessageDelete[channelID]` is a callback, which means it's used in the command trigger *(not the code)*. The command is ran when a user deletes a message. You must replace 'channelID' with a [valid channel ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) or a server variable that holds the channelID (`$getServerVar[]`).

## Example
**#1:** Make a new command, with the trigger `$onMessageDelete[channelID]`.
> 🧙‍♂️ Replace 'channelID' with a [valid channel ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)!

![example1](https://user-images.githubusercontent.com/69215413/129492544-44511c6b-65f3-4cac-b5dd-76d8d1d9fdba.png)

**#2:** Set the code/reply text.\
![example2](https://user-images.githubusercontent.com/69215413/129492399-8af2ca7f-32ef-4b21-ba98-1c2e53eb7266.png)

**#3:** Now the bot will send a message when someone deletes a message! ✨\
![example3](https://user-images.githubusercontent.com/69215413/129492390-f41754d3-bfc7-4d96-b057-e4a8d8019f26.png)
