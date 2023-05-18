# $onMessageDelete
*Triggered when a user deletes a message.*

`$onMessageDelete[channelID]` is a callback, which means it's used in the command trigger *(not the code)*. The command is ran when a user deletes a message.

## Syntax 
```
$onMessageDelete[channelID]
```

### Parameters
- `channelID` `(Type: Snowflake || Flag: Required)`: The channel to which the resulting message will be sent.

## Example
1. Create a command with the trigger `$onMessageDelete[channelID]`.
    > 🧙‍♂️ You must replace "channelID" with a [valid channel ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) or a server variable that holds the channel ID [*(See more here...)*](#advanced)!
  
    ![example1](https://github.com/NilPointer-Software/bdfd-wiki/assets/111157596/b722b5b7-35f8-4682-a118-b17916978c2a)

2. Input your code/reply text.
    > 🧙‍♂️ You can use functions like `$messageID`, `$getTimestamp` here.

    ![example2](https://github.com/NilPointer-Software/bdfd-wiki/assets/111157596/027aa71a-9051-4b78-bbc7-3149424fe91b)

3. Now, you have a logging message! ✨\
![example3](https://github.com/NilPointer-Software/bdfd-wiki/assets/111157596/a7552795-d8aa-4358-ac8f-17002d6603cf)\
![example4](https://github.com/NilPointer-Software/bdfd-wiki/assets/111157596/18bbb08e-ca97-4fdf-b6e9-deee3d7f4b44)

## Advanced
### Per-Server $onMessageDelete
Both free and premium users can use `$onMessageDelete[]`, and all users can put `$getServerVar[]` within `$onMessageDelete[]`. However, non-premium users can not use `$getServerVar[]` outside of callbacks.\
If you own a public bot and want to make it so multiple different servers can use `$onMessageDelete[]` *(e.g. set their own message logging channel)*, follow these steps:

1. Create a variable named "`logs`" and the value set to nothing.\
![image](https://github.com/NilPointer-Software/bdfd-wiki/assets/111157596/dae381e3-4fe0-4e5f-9cc8-e18d0f56215f)

2. Create a command for setting the logging channel, then put the following in your code:
    ```
    $nomention
    $onlyAdmin[You need the admin permission to use that!]
    $argsCheck[>1;Please mention a channel!]
    Message logging channel updated!
    $setServerVar[logs;$mentionedChannels[1]]
    ```

    > 📝 Servers will need to setup the channel they want the logging message to send to *(by running a command with the code above)*.

3. Now replace `$onMessageDelete[channelID]` in your command trigger, with `$onMessageDelete[$getServerVar[logs]]` and you're all set!
