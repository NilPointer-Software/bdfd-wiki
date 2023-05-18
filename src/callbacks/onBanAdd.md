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
1. Create a command with `$onBanAdd[channelID]` as the trigger.
    > 🧙‍♂️ You must replace "channelID" with a [valid channel ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) or a server variable that holds the channel ID [*(See more here...)*](#advanced)!

    ![example1](https://user-images.githubusercontent.com/69215413/129491257-7fa6c9c4-e4b4-47c1-8df0-3f580ffa79bf.png)

2. Input your code/reply text.
    > 🧙‍♂️ You can use functions like `$username`, `$authorID`, `$authorAvatar`, [`$getBanReason[]`](../bdscript/getBanReason.md) here.

    ![example2](https://user-images.githubusercontent.com/69215413/129491086-e6a96af6-edeb-4f2b-b226-0e49ed59f544.png)

3. Now you have a ban message! ✨\
![example3](https://user-images.githubusercontent.com/69215413/129491043-f587388a-6de8-4c81-a2ef-95a9ef54acbc.png)

## Advanced
### Per-Server $onBanAdd
Both free and premium users can use `$onBanAdd[]`, and all users can put `$getServerVar[]` within `$onBanAdd[]`. However, non-premium users can not use `$getServerVar[]` outside of callbacks.\
If you own a public bot and want to make it so multiple different servers can use `$onBanAdd[]` *(e.g. set their own logging channel)*, follow these steps:

1. Create a variable named "`logs`" and the value set to nothing.\
![image](https://user-images.githubusercontent.com/111157596/239278501-dae381e3-4fe0-4e5f-9cc8-e18d0f56215f.png)

2. Create a command for setting the logging channel, then put the following in your code:
    ```
    $nomention
    $onlyAdmin[You need the admin permission to use that!]
    $argsCheck[>1;Please mention a channel!]
    Logging channel updated!
    $setServerVar[welcome;$mentionedChannels[1]]
    ```

    > 📝 Servers will need to setup the channel they want the ban message to send to *(by running a command with the code above)*.

3. Now replace `$onBanAdd[channelID]` in your command trigger, with `$onBanAdd[$getServerVar[logs]]` and you're all set!
