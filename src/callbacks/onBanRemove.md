# $onBanRemove
*Triggered when a user gets unbanned from the server.*

`$onBanRemove[Channel ID]` is a callback, which means it's used in the command trigger *(not the code)*. The command is ran when a user is unbanned from the server. 

## Syntax
```
$onBanRemove[Channel ID]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The ID of the channel where the message should be sent to.

## Example
1. Create a command with `$onBanRemove[Channel ID]` as the trigger.
    > 🧙‍♂️ You must replace "Channel ID" with a [valid channel ID](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) or a server variable that holds the channel ID [*(See more here...)*](#advanced)!

    ![example1](https://user-images.githubusercontent.com/69215413/129492147-3d51dd5c-9628-43f7-a175-faed03442501.png)

2. Input your code/reply text.
    > 🧙‍♂️ You can use functions like `$username`, `$authorID`, `$authorAvatar` here.

    ![example2](https://user-images.githubusercontent.com/69215413/129492022-8acd4877-638c-4855-8970-13dab37b032e.png)

3. Now you have an unban message! ✨\
   ``` discord yaml
   - user_id: 566613317972394004
     username: Wiki Bot
     color: "#748BD4"
     bot: true
     verified: true
     content: |
       Carl-bot (235148962103951360) was unbanned!
   ```


## Advanced
### Per-Server $onBanRemove
Both free and premium users can use `$onBanRemove[]`, and all users can put `$getServerVar[]` within `$onBanRemove[]`. However, non-premium users can not use `$getServerVar[]` outside of callbacks.\
If you own a public bot and want to make it so multiple different servers can use `$onBanRemove[]` *(e.g. set their own logging channel)*, follow these steps:

1. Create a variable named "`logs`" and the value set to nothing.\
![image](https://user-images.githubusercontent.com/111157596/239278501-dae381e3-4fe0-4e5f-9cc8-e18d0f56215f.png)

2. Create a command for setting the logging channel, then put the following in your code:
    ```
    $nomention
    $onlyAdmin[You need the admin permission to use that!]
    $argsCheck[>1;Please mention a channel!]
    Logging channel updated!
    $setServerVar[logs;$mentionedChannels[1]]
    ```

    > 📝 Servers will need to setup the channel they want the unban message to send to *(by running a command with the code above)*.

3. Now replace `$onBanRemove[Channel ID]` in your command trigger, with `$onBanRemove[$getServerVar[logs]]` and you're all set!
