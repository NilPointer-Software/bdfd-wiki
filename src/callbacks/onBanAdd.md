# $onBanAdd
*Triggered when a user gets banned from the server.*

`$onBanAdd[channelID]` is a callback, which means it's used in the command trigger *(not the code)*. The command is ran when a user is banned from the server. 

## Syntax
```
$onBanAdd[channelID]
```

### Parameters
- `channelID` `(Type: Snowflake || Type: Required)`: The ID of the channel where the message should be sent to.

## Example
**#1:** Create a command with `$onBanAdd[channelID]` as the trigger.
> 🧙‍♂️ You must replace "channelID" with a [valid channel ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) or a server variable that holds the channel ID ([`$getServerVar[]`](../bdscript/getServerVar.md))!

![example1](https://user-images.githubusercontent.com/69215413/129491257-7fa6c9c4-e4b4-47c1-8df0-3f580ffa79bf.png)

**#2:** Input your code/reply text.
> 🧙‍♂️ You can use functions like `$username`, `$authorID`, `$authorAvatar`, [`$getBanReason[]`](../bdscript/getBanReason.md) here.

![example2](https://user-images.githubusercontent.com/69215413/129491086-e6a96af6-edeb-4f2b-b226-0e49ed59f544.png)

**#3:** Now you have a ban message! ✨\
![example3](https://user-images.githubusercontent.com/69215413/129491043-f587388a-6de8-4c81-a2ef-95a9ef54acbc.png)
