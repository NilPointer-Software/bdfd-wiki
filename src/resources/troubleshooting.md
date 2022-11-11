# Troubleshooting
This page contains a number of troubleshooting that can help you to solve problems that BDFD users often encounter.

## Summary
### Troubleshooting for...
1. **[$onJoined[]](#onjoined)**\
    - **[The Callback Doesn't Work](#the-callback-doesnt-work)**
2. **[Moderation And Server Management Related Commands](#moderation-and-server-management-related-commands)**\
    - **[The Bot Can't Assign Or Take Roles](#the-bot-cant-assign-or-take-roles)**
    - **[Gives an Error When Trying To Moderate a Member](#gives-an-error-when-trying-to-moderate-a-member)**
    - **[Gives an Error When Trying To Purge Messages](#gives-an-error-when-trying-to-purge-messages)**
3. **[$addReactions and $addCmdReactions](#addreactions-and-addcmdreactions)**\
    - **[The Bot Fails To Add Reactions](#the-bot-fails-to-add-reactions)**
4. **[$time](#time)**\
    - **[The Function Returns an Error](#the-function-returns-an-error)**
5. **[Economy Related Commands](#economy-related-commands)**\
    - **[Negative Balance](#negative-balance)**
        - **[Pay Command](#pay-command)**
        - **[Roulette Command](#roulette-command)**
    - **[Desynchronized Balance](#desynchronized-balance)**
        - **[The Balance Is Different On Different Servers](#the-balance-is-different-on-different-servers)**
        - **[The Displayed Balance Is Different For Different Commands](#the-displayed-balance-is-different-for-different-commands)**
6. **[Leaderboards](#leaderboards)**\
    - **[The Leaderboard Is Empty](#the-leaderboard-is-empty)**
    - **[The User's Value Isn't Updated](#the-users-value-isnt-updated)**
7. **[Bot Issues](#bot-issues)**\
    - **[The Bot Is Offline](#the-bot-is-offline)**
    - **[The Bot Doesn't Respond](#the-bot-doesnt-respond)**
    - **[The Bot Goes Offline From Time To Time](#the-bot-goes-offline-from-time-to-time)**
    - **[Desynchronization of Commands](#desynchronization-of-commands)**
        - **[Ghost Command](#ghost-command)**
    - **[The Bot Takes A Long Time To Respond](#the-bot-takes-a-long-time-to-respond)**
    - **[The Slash Commands Doesn't Appear](#the-slash-commands-doesnt-appear)**
    - **[Integration Requires Code Grant](#integration-requires-code-grant)**
8. **[App Issues](#app-issues)**\
    - **[The Ad Button Doesn't Work](#the-ad-button-doesnt-work)**
    - **[Ghost Functions From The Changelog](#ghost-functions-from-the-changelog)**

---
### Let's Troubleshoot Everything!

---
## $onJoined[]
### The Callback Doesn't Work
**The 1st Reason**\
You specified the wrong Channel ID.
How to get the Channel ID correctly:
<details><summary>For Desktop</summary>

> Before starting, make sure you have Developer Mode enabled on Discord.
>
> ![dev-desktop](https://user-images.githubusercontent.com/70456337/197304100-119ebf4d-5e77-450b-8677-9e3ee9a75308.gif)

![id-desktop](https://user-images.githubusercontent.com/70456337/197304139-1e1a410d-acae-4036-9012-6c1f20bbdec2.gif)


</details>
<details><summary>For Mobile</summary>

> Before starting, make sure you have Developer Mode enabled on Discord.
>
> ![dev-mobile](https://user-images.githubusercontent.com/70456337/197304114-82faf9ff-3a63-4599-91b4-823760d3cced.gif)

![id-mobile](https://user-images.githubusercontent.com/70456337/197304131-f814b260-3c2d-4ee9-9638-e5978ca63289.gif)


</details>
<details><summary>Using a Function</summary>

Using the `$channelID`, `$mentionedChannels` or `$findChannel` functions, you can get the Channel ID of the desired channel.
Check out these functions:
1. [$channelID](../bdscript/channelID.md)
2. [$mentionedChannels](../bdscript/mentionedChannels.md)
3. [$findChannel](../bdscript/findChannel.md)

</details>

**The 2nd Reason**\
Your bot doesn't have the `sendmessages` and/or the `embedlinks` permission that allow the bot to send messages (or embed messages) in a given channel.\
*Best Practice Solution*\
Grant both of these permissions to the bot in the desired channel through the channel's permissions settings:

![edit-channel](https://user-images.githubusercontent.com/70456337/197336593-92116a39-4587-4c67-a682-830553fe4409.png)\
![perms](https://user-images.githubusercontent.com/70456337/197336613-bd663cad-842b-4759-a0f9-938129362c13.png)\
![add](https://user-images.githubusercontent.com/70456337/197336635-ff8d4338-8293-4b1a-b57d-bc3658705509.png)\
![search](https://user-images.githubusercontent.com/70456337/197336687-9412086c-60fd-4a4f-b3b1-c0ca5b2df192.png)\
![message](https://user-images.githubusercontent.com/70456337/197336704-cf9ce709-dd7f-4156-b1dc-756f76ccf690.png)\
![embed](https://user-images.githubusercontent.com/70456337/197336720-d71688d1-195c-4481-a2d2-295265a3c64d.png)\
![save](https://user-images.githubusercontent.com/70456337/197336732-8da2c6e5-ab6e-4588-8b94-d0b240c4bf5a.png)

**The 3rd Reason**\
There's a critical error in your code.\
Callbacks can't return errors that occurred during code execution.
Therefore, sometimes it's difficult to solve errors in the callback code.\
*Best Practice Solution*\
Try debugging your command as a text command. In most cases, they're backward compatible with the `$onJoined` callback, since both, by default, process the actions of the command author (when a user joins the server, this user becomes the "author" of this callback).

**The 4th Reason**\
Members Intent isn't enabled.\
This callback requires the Members Intent to be enabled.

Read the [Gateway Intents Guide](../guides/gatewayIntents.md) for more details.

**The 5th Reason**\
You have several commands with this callback.\
You can only have one command with this callback. If you want to make a unique welcome message for multiple servers instead of just one, then check out [Per-Server $onJoined](../callbacks/onJoined.md#per-server-onjoined).

---
## Moderation And Server Management Related Commands
### The Bot Can't Assign Or Take Roles
**The 1st Reason**\
Your bot doesn't have the `manageroles` permission.
Make sure that one of the roles that the bot has, has this permission enabled.

![perm-mroles](https://user-images.githubusercontent.com/70456337/197348144-3cfc97ec-c2c8-4805-b0b8-1691bf6b4d7d.png)

**The 2nd Reason**\
You are trying to assign or take roles that are higher than the highest role your bot has.
### Gives an Error When Trying To Moderate a Member
**The 1st Reason**\
Your bot has lower priority than the specified user.\
This means that the highest role your bot has is lower in position than the highest role the specified user has.\
Or, the specified user is the owner of the server.

**The 2nd Reason**\
Your bot doesn't have the required permissions.
Make sure that the permission list of any role that the bot has, have these required permissions.
- If you're trying to ban a user.\
    ![perm-ban](https://user-images.githubusercontent.com/70456337/197348222-87b63505-d3a3-4842-8f29-0724454f83fe.png)
- If you're trying to kick a user.\
    ![perm-kick](https://user-images.githubusercontent.com/70456337/197348246-dec79a88-2ba1-4028-b117-c89f2813fd46.png)
- If you're trying to timeout a user.\
    ![perm-timeout](https://user-images.githubusercontent.com/70456337/197348265-0716b0eb-4467-4ea5-bbd7-534d52ccde41.png)
- If you're trying to change user's nickname.\
    ![perm-nick](https://user-images.githubusercontent.com/70456337/197348203-1c3ea02d-8182-4c5e-8e1c-65175602f500.png)
    > **⚠ Important note**: bots **can't** change the owner's nickname!
### Gives an Error When Trying To Purge Messages
**The 1st Reason**\
Your bot doesn't have the `managemessages` permission.
Make sure that one of the roles that the bot has, has this permission enabled.

![perm-mmesages](https://user-images.githubusercontent.com/70456337/197358582-dcb39545-ae01-4eb9-bbe2-34c0af6c4f02.png)

**The 2nd Reason**\
You are trying to purge messages that have been around for more than two weeks.\
BDFD uses a bulk request to purge messages, and it can't process messages that are more than two weeks old.

---
## $addReactions and $addCmdReactions
### The Bot Fails To Add Reactions
**The 1st Reason**\
The user has blocked the bot, so the bot can't react to the user's messages. This works exactly the same if the user has blocked another user.

**The 2nd Reason**\
You're specifying the emoji in the function argument incorrectly.
- Default emojis.
    ```diff
    - $addCmdReactions[:joy:]
    + $addCmdReactions[😂]
    ```
- Custom emojis.
    ```diff
    - $addCmdReactions[:pikachu:]
    - $addCmdReactions[\:pikachu:]
    + $addCmdReactions[<:pikachu:951437967711420456>]
    ```
    You must use the Emoji ID form of the desired emoji.

**The 3rd Reason**\
*Case with custom emojis.*\
Your bot must share a server with the specified emoji in order to use it. It works like Discord Nitro.

---
## $time
### The Function Returns an Error
**The 1st Reason**\
Incorrect use of the function. The function doesn't return the current time or anything like that.\
The function's role is to change the timezone for time-related functions (such as [`$day`](../bdscript/day.md), [`$hour`](../bdscript/hour.md), and so on)

**The 2nd Reason**\
Incorrect time zone or incorrect time zone format.\
BDFD uses the official IANA time zone database for time zone information.\
Please use the [TZ Database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) from this list in the `$time` function.
```diff
- $time[America]
- $time[New_York]
+ $time[America/New_York]
```

---
## Economy Related Commands
- This part will have fully working and quality code examples that you can use in your bot.
- In this part, examples and more will be based on the [*local economy*](../guides/variables.md#local-economy) and [BDScript 2](../guides/bdscript2.md).

| Variable Name | Default Variable Value | *Our* Variable Value | Target's Variable Value |
| :-------------: |  :--------------------: |  :------------------: |  :--------------------:  |
|       Money        |                  0                     |                100               |                 120                   |

### Negative Balance
**The 1st Possible Solution**\
Adding limiters or if statements that will prevent actions in which the executor's or target's balance becomes negative.\
This solution can be an alternative to "Prevent actions when the amount is greater than the user's balance".

|    Argument       |    Content              |
| :-------------:  |  :--------------:  |
|  1st - Target      |     Afternoon         |
|  2nd - Amount  |         50                  |
|  3rd - Comment | Happy Birthday! |

<details><summary>View Arguments Formatting In Code.</summary>
    
- Target
    ```
    $var[target;$findUser[$message[1];no]]
    ```
- Amount
    ```
    $var[amount;$message[2]]
    ```
- Comment
    ```
    $var[comment;$trimSpace[$replaceText[$replaceText[$message;$message[1];];$message[2];]]]
    ```

</details>
<br>

- Limiters Method
    ```
    $var[ourNewBalance;$sub[$getUserVar[Money];$var[amount]]]

    $onlyIf[$var[ourNewBalance]>0;Error Message]
    ```
- If Statements Method
    ```
    $var[ourNewBalance;$sub[$getUserVar[Money];$var[amount]]]

    $if[$var[ourNewBalance]<0]
        Error Message
    $else
        Code
    $endif
    ```
#### Pay Command
<details><summary>Expand Code Example (67 lines)</summary>

```
$nomention
$allowMention

$if[$argCount[$message]<2]
    $color[FF544C]
    $title[Payment System]
    $description[Missing Argumets! Example Command: `!pay <user> <amount> (comment)`]
    $stop
$endif

$var[target;$findUser[$message[1];no]]
$var[amount;$message[2]]
$var[comment;$trimSpace[$replaceText[$replaceText[$message;$message[1];];$message[2];]]]

$if[$var[target]==]
    $color[FF544C]
    $title[Payment System]
    $description[User (1st argument) not found on the server!]
    $stop
$endif

$if[$var[target]==$authorID]
    $color[FF544C]
    $title[Payment System]
    $description[You cannot pay yourself!]
    $stop
$endif

$if[$isNumber[$var[amount]]==false]
    $color[FF544C]
    $title[Payment System]
    $description[Amount (2nd argument) must be a number!]
    $stop
$endif

$if[$checkContains[$var[amount];.]==true]
    $color[FF544C]
    $title[Payment System]
    $description[Amount (2nd argument) must be an integer!]
    $stop
$endif

$if[$var[amount]<0]
    $color[FF544C]
    $title[Payment System]
    $description[Amount (2nd argument) cannot be less than 0!]
    $stop
$endif

$if[$var[comment]==]
    $var[comment;Not provided.]
$endif

$var[ourNewBalance;$sub[$getUserVar[Money];$var[amount]]]

$if[$var[ourNewBalance]<0]
    $color[FF544C]
    $title[Payment System]
    $description[❌ Hey <@$authorID>! What are you left with if you try to make such a payment?]
$else
    $color[7EFF88]
    $title[Payment System]
    $description[✔ You have successfully paid <@$var[target]> $var[amount] money! **Comment**: $var[comment]]

    $setUserVar[Money;$sum[$getUserVar[Money;$var[target]];$var[amount]];$var[target]]
    $setUserVar[Money;$var[ourNewBalance]]

    $if[$isUserDMEnabled[$var[target]]==true]
        $sendEmbedMessage[$dmChannelID[$var[target]];;Payment System;;Good time! <@$authorID> paid you $var[amount] money and left a comment: $var[comment];7EFF88]
    $endif
$endif
```
<details><summary>Expand Code Breakdown</summary>

- ```
    $if[$argCount[$message]<2]
        $color[FF544C]
        $title[Payment System]
        $description[Missing Argumets! Example Command: `!pay <user> <amount> (comment)`]
        $stop
    $endif
    ```
    Checks the number of arguments in the code.\
    If there are less than 2 arguments, an embed error will be returned and code execution will be stopped.
- ```
    $var[target;$findUser[$message[1];no]]
    $var[amount;$message[2]]
    $var[comment;$trimSpace[$replaceText[$replaceText[$message;$message[1];];$message[2];]]]
    <...>
    $var[ourNewBalance;$sub[$getUserVar[Money];$var[amount]]]
    ```
    Argument formatting. 
    - ```
        $var[ourNewBalance;$sub[$getUserVar[Money];$var[amount]]]
        ```
        Calculates the *our* future balance after making a payment.
- ```
    $if[$var[target]==]
        $color[FF544C]
        $title[Payment System]
        $description[User (1st argument) not found on the server!]
        $stop
    $endif
    ```
    Checks if the target is present on the current server.\
    If not, an embed error will be returned and code execution will be stopped.
- ```
    $if[$var[target]==$authorID]
        $color[FF544C]
        $title[Payment System]
        $description[You cannot pay yourself!]
        $stop
    $endif
    ```
    Checks if the command author is the target.\
    If yes, an embed error will be returned and code execution will be stopped.
- ```
    $if[$isNumber[$var[amount]]==false]
        $color[FF544C]
        $title[Payment System]
        $description[Amount (2nd argument) must be a number!]
        $stop
    $endif
    ```
    Checks if the specified amount is a valid number.\
    If not, an embed error will be returned and code execution will be stopped.
- ```
    $if[$checkContains[$var[amount];.]==true]
        $color[FF544C]
        $title[Payment System]
        $description[Amount (2nd argument) must be an integer!]
        $stop
    $endif
    ```
    Checks if the specified amount is an integer.\
    If not, an embed error will be returned and code execution will be stopped.\
    Exists in order to avoid payments with floating (decimal) numbers.
- ```
    $if[$var[amount]<0]
        $color[FF544C]
        $title[Payment System]
        $description[Amount (2nd argument) cannot be less than 0!]
        $stop
    $endif
    ```
    Checks if the specified amount is less than 0.\
    If yes, an embed error will be returned and code execution will be stopped.
- ```
    $if[$var[comment]==]
        $var[comment;Not provided.]
    $endif
    ```
    Checks for a comment. If there is no comment (the argument is empty), "Not provided." will be written as comment.
- ```
    $if[$var[ourNewBalance]<0]
        $color[FF544C]
        $title[Payment System]
        $description[❌ Hey <@$authorID>! What are you left with if you try to make such a payment?]
    $else
        $color[7EFF88]
        $title[Payment System]
        $description[✔ You have successfully paid <@$var[target]> $var[amount] money! **Comment**: $var[comment]]

        $setUserVar[Money;$sum[$getUserVar[Money;$var[target]];$var[amount]];$var[target]]
        $setUserVar[Money;$var[ourNewBalance]]

        $if[$isUserDMEnabled[$var[target]]==true]
            $sendEmbedMessage[$dmChannelID[$var[target]];;Payment System;;Good time! <@$authorID> paid you $var[amount] money and left a comment: $var[comment];7EFF88]
        $endif
    $endif
    ```
    The main part of the command, where:
    1. Checking whether our balance will be negative. If yes, an embed error will be returned.
    2. Changing *our* variable value (money withdrawal) and the target's variable value (money replenishment).
        ```rb
        $setUserVar[Money;$sum[$getUserVar[Money;$var[target]];$var[amount]];$var[target]]
        $setUserVar[Money;$var[ourNewBalance]]
        ```
    3. Sending an embed message to the target's DMs that we have made a payment.\
        The message will be sent only if the target's DMs are enabled.
        ```rb
        $if[$isUserDMEnabled[$var[target]]==true]
            $sendEmbedMessage[$dmChannelID[$var[target]];;Payment System;;Good time! <@$authorID> paid you $var[amount] money and left a comment: $var[comment];7EFF88]
        $endif
        ```

</details>

</details>

<details><summary>Expand Attachments</summary>

![p-ex-1](https://user-images.githubusercontent.com/70456337/200176249-589b8db7-f7b3-41bb-8f58-65a1688bfb1a.png)
![p-ex-2](https://user-images.githubusercontent.com/70456337/200176262-f3850558-1f2e-4d97-aa2a-3a3dfce88bb1.png)
![p-ex-3](https://user-images.githubusercontent.com/70456337/200176275-28af50da-589d-424d-85c6-4ba6d64f32eb.png)
![p-ex-4](https://user-images.githubusercontent.com/70456337/200176279-75d7402a-cb26-45e4-903c-253da4c5f3d6.png)
![p-ex-5](https://user-images.githubusercontent.com/70456337/200176290-2ad03222-553f-4eb6-a928-7337fb96857b.png)
![p-ex-6](https://user-images.githubusercontent.com/70456337/200176297-f28a6467-1b4d-4edb-86e3-895e344d4d07.png)

</details>

**The 2nd Possible Solution**\
Setting the balance to 0 if the future balance becomes negative.\
This solution may be suitable for gambling-related commands, if you do not want the user's balance to become negative in case of losses.

|    Argument    |    Content      |
| :------------: | :-----------: |
|  1st - Bet         |      60             |

<details><summary>View Arguments Formatting In Code.</summary>
    
- Bet
    ```
    $var[bet;$message[1]]
    ```

</details>
<br>

```
$var[ourNewBalance;$sub[$getUserVar[Money];$var[bet]]]

$if[$var[ourNewBalance]<0]
    $var[ourNewBalance;0]
$endif
```

#### Roulette Command
<details><summary>Expand Code Example (53 lines)</summary>

```
$nomention

$var[bet;$message[1]]

$if[$isNumber[$var[bet]]==false]
    $color[FF544C]
    $title[Roulette]
    $description[Bet must be a number!]
    $stop
$endif

$if[$checkContains[$var[bet];.]==true]
    $color[FF544C]
    $title[Roulette]
    $description[Bet must be an integer!]
    $stop
$endif

$if[$var[bet]>$getUserVar[Money]]
    $color[FF544C]
    $title[Roulette]
    $description[The bet cannot be higher than your balance!]
    $stop
$endif

$if[$var[bet]<0]
    $color[FF544C]
    $title[Roulette]
    $description[The bet cannot be less than 0!]
    $stop
$endif

$var[bet;$multi[$var[bet];2]]

$if[$random[1;3]==1]
    $var[ourNewBalance;$sum[$getUserVar[Money];$var[bet]]]
    
    $color[7EFF88]
    $title[Roulette]
    $description[Wow, you are lucky! You have won $var[bet]!]
$else
    $var[ourNewBalance;$sub[$getUserVar[Money];$var[bet]]]
    
    $color[FF544C]
    $title[Roulette]
    $if[$var[ourNewBalance]<0]
        $var[ourNewBalance;0]
        $description[What a pity! You lost and became bankrupt!]
    $else
        $description[What a pity! You have lost the $var[bet].]
    $endif
$endif

$setUserVar[Money;$var[ourNewBalance]]
```
<details><summary>Expand Code Breakdown</summary>

- ```
    $var[bet;$message[1]]
    ```
    Argument formatting.
- ```
    $if[$isNumber[$var[bet]]==false]
        $color[FF544C]
        $title[Roulette]
        $description[Bet must be a number!]
        $stop
    $endif
    ```
    Checks if the bet is a valid number.\
    If not, an embed error will be returned and code execution will be stopped.
- ```
    $if[$checkContains[$var[bet];.]==true]
        $color[FF544C]
        $title[Roulette]
        $description[Bet must be an integer!]
        $stop
    $endif
    ```
    Checks if the bet is an integer.\
    If not, an embed error will be returned and code execution will be stopped.\
    Exists in order to avoid bets with floating (decimal) numbers.
- ```
    $if[$var[bet]>$getUserVar[Money]]
        $color[FF544C]
        $title[Roulette]
        $description[The bet cannot be higher than your balance!]
        $stop
    $endif
    ```
    Checks if the bet is higher than *our* balance.\
    If yes, an embed error will be returned and code execution will be stopped.
- ```
    $if[$var[bet]<0]
        $color[FF544C]
        $title[Roulette]
        $description[The bet cannot be less than 0!]
        $stop
    $endif
    ```
    Checks if the bet is less than 0.\
    If yes, an embed error will be returned and code execution will be stopped.
- ```
    $if[$random[1;3]==1]
        $var[ourNewBalance;$sum[$getUserVar[Money];$var[bet]]]
        <...>
    $else
        $var[ourNewBalance;$sub[$getUserVar[Money];$var[bet]]]
        <...>
        $if[$var[ourNewBalance]<0]
            $var[ourNewBalance;0]
            <...>
        $else
            <...>
        $endif
    $endif

    $setUserVar[Money;$var[ourNewBalance]]
    ```
    Manages roulette results. If `$random[1;3]` equals 1, then *we* win and the bet is added to the balance in the doubled amount. Otherwise, the bet will be taken away from the balance in doubled amount.\
    If the future balance in case of loss will be negative, it will be set to 0.

</details>

</details>

<details> <summary>Expand Attachments</summary>

![r-ex-1](https://user-images.githubusercontent.com/70456337/200128118-0b5bb7bf-a73f-47c5-8e4a-d070d1b5ce5c.png)
![r-ex-2](https://user-images.githubusercontent.com/70456337/200128126-f40866cd-a58c-4510-983c-b331aa57fecb.png)\
![r-ex-3](https://user-images.githubusercontent.com/70456337/200128133-1938b7ad-f2b6-40fa-8efb-ee1d78a82922.png)

</details>

### Desynchronized Balance
#### The Balance Is Different On Different Servers
This is because you're probably using [`$setUserVar`](../bdscript/setUserVar.md) and [`$getUserVar`](../bdscript/getUserVar.md) in your economy. But these functions are based as [local variables](../guides/variables.md#local-economy). Their values are unique for each server.\
If you want the same balance on all servers, you should use [`$setVar`](../bdscript/setVar.md) and [`$getVar`](../bdscript/getVar.md) (with `userID` arguments). These functions are based as [global user variables](../guides/variables.md#globalglobal-user-variables).
#### The Displayed Balance Is Different For Different Commands
Most often this is because you've mixed up the variable functions and you're using the wrong variable type.\
For example, if you use [`$setUserVar`](../bdscript/setUserVar.md) and [`$getUserVar`](../bdscript/getUserVar.md) and [`$getUserVar`](../bdscript/getUserVar.md) in the Roulette command and [`$getVar`](../bdscript/getVar.md) in the Balance command, this will show different values. The solution to this is to replace [`$getVar`](../bdscript/getVar.md) with [`$getUserVar`](../bdscript/getUserVar.md) in the Balance command, or vice versa, replace [`$setUserVar`](../bdscript/setUserVar.md) and [`$getUserVar`](../bdscript/getUserVar.md) and [`$getUserVar`](../bdscript/getUserVar.md) with [`$setVar`](../bdscript/setVar.md) and [`$getVar`](../bdscript/getVar.md) accordingly  in the Roulette command.\
**Note:** don't forget that [global user variables](../guides/variables.md#globalglobal-user-variables) require a `userID` argument.


---
## Leaderboards
### The Leaderboard Is Empty
**The 1st Reason**\
You choosed the wrong leaderboard function.
- If you're using the [`$setUserVar`](../bdscript/setUserVar.md)/[`$getUserVar`](../bdscript/getUserVar.md) functions, you've to choose the [`$userLeaderboard`](../bdscript/userLeaderboard.md) function.
- If in your're using the [`$setVar`](../bdscript/setVar.md)/[`$getVar`](../bdscript/getVar.md) functions, you've to choose the [`$globalUserLeaderboard`](../bdscript/globalUserLeaderboard.md) function.
- If you're using the [`$setServerVar`](../bdscript/setServerVar.md)/[`$getServerVar`](../bdscript/getServerVar.md) functions, you've to choose the [`$serverLeaderboard`](../bdscript/serverLeaderboard.md) function.

**The 2nd Reason**\
*(In case of using the [`$getLeaderboardValue`](../bdscript/getLeaderboardValue.md) function)*\
You specified the wrong variable type.
- If you're using the [`$setUserVar`](../bdscript/setUserVar.md)/[`$getUserVar`](../bdscript/getUserVar.md) functions, you've to specify the `user` as type.
- If in your're using the [`$setVar`](../bdscript/setVar.md)/[`$getVar`](../bdscript/getVar.md) functions, you've to specify the `globalUser` as type.
- If you're using the [`$setServerVar`](../bdscript/setServerVar.md)/[`$getServerVar`](../bdscript/getServerVar.md) functions, you've specify the `server` as type.

**The 3rd Reason**\
The leaderboard haven't generated yet.\
Sometimes it takes a while to generate the leaderboard.


### The User's Value Isn't Updated
As with the generation of the leaderboard, updating it can also take a while.\
This can be mainly due to the fact that the leaderboard has a large database (i.e. the total number of users with a modified variable value other than the default).

---
## Bot Issues
### The Bot Is Offline
**The 1st Reason**\
The node is restarting. While the node is restarting, logically, the bot can't work.\
Usually restarting doesn't take more than 5-10 minutes.\
So please wait a while and have a cup of tea or coffee while the node restarts.

**The 2nd Reason**\
For some reason, bot's token is no longer valid or the BDFD app thinks so.\
You can solve this problem by regenerating bot's token on the developer portal and then replacing the old token in the BDFD app with the new one in the bot's Settings tab.

**The 3rd Reason**\
Not a common problem, but possible. The node your bot is running on is experiencing problems.\
In this case, join the [support server](https://discord.gg/botdesigner), create a ticket using the `!new` command and tell the staff your bot's ID and node number, if you know it (node number can be found out using the [`$botNode`](../bdscript/botNode.md) function when your bot is online).\
The staff will inform the developers of the current problems, providing the scale of the problem (affected bots and/or nodes).\
**Please don't regenerate bot token in this case**, as it leads to changing the node, and if everyone starts changing their node from problem node to healthy node, healthy node can also be affected by the problem.


### The Bot Doesn't Respond
**The 1st Reason**\
If your bot is based on text commands, and if you have Message Content Intent disabled, you must enable it in your bot's settings.\
Read the [Gateway Intents Guide](../guides/gatewayIntents.md) for more details.

**The 2nd Reason**\
Your bot doesn't have the necessary permissions.\
In order for your bot to respond correctly to a command, it must have permissions for `Send Messages`, `Embed Links` (if your code has embed functions), and `Read Messages` in order for the bot to have access to the channel.

### The Bot Goes Offline From Time To Time
This is due to the fact that nodes are restarted from time to time to maintain stable operation of all the bots, which also work on this node.

### Desynchronization of Commands
Desynchronization of commands means, for example, that you have deleted a command but the bot still responds to it (aka. Ghost Command), or you see different code of your command in the web app and another in the mobile app.
#### Ghost Command
Not many people encounter this problem, but it's still worth mentioning.\
This problem is related to database synchronization (between your application data and your bot's data in the database).\
**Solution Options**\
*The 1st Solution*\
Restart the app.\
Close the app from Recent apps and reopen it. This may result in a deleted command that the deletion didn't sync with the database, and then you can delete that command again.

*The 2nd Solution*\
Attempting to forcibly restart the bot.\
You can do this in the settings of your bot in the app. Restarting the bot can send a retransfer of data from the application to the database, and then the deleted command will be deleted for real.

*The Solution Options Didn't Help*\
In this case, join the [support server](https://discord.gg/botdesigner), create a ticket using the `!new` command and tell the staff your bot's ID.\
The staff will mention one of the developers to take a look at this problem with your bot.

### The Bot Takes A Long Time To Respond
**The 1st Reason**\
Your code is too long and/or complicated.\
This may be the obvious reason if it is. Executing large and complex code takes more resources.\
When writing code, you should think about how to make it more compact and less complex, but in a way that makes your idea come to fruition.

**The 2nd Reason**\
Your bot was rate limited. This can happen because of excessive requests to Discord API, performed by BDFD functions (such as `$addEmoji` and others).\
You should not stack such functions and try to perform them all at once.

**The 3rd Reason**\
The node your bot is running on is experiencing some slight problems (such as a rate limits). If you're sure this is the case, you can regenerate the bot's token and replace it with a new one. This will cause your bot to change its node.

### The Slash Commands Doesn't Appear
**The 1st Reason**\
Old version of the application. Make sure that you have a latest version of the application installed.\
New versions of the application have been improved and updated, and new features have been added. In addition, errors with the validity check of the slash commands have been fixed. You will be warned if you set up your slash command incorrectly, in which case the application will not allow you to save the slash command.

**The 2nd Reason**\
Slash commands are cached by discord, so it takes time before they appear in discord.

They're also cached on the client side, if they were successfully cached in discord. If other users have a new slash command and you don't, restart the discord client.\
Restarting will cause existing slash commands to be cleared and new ones will cache.

**The 3rd Reason**\
Conflict of slash commands due to other services that you're no longer using. For example, if two slash commands of same type have the same name, but one is created using a third-party service, and the other through the BDFD, this can cause a conflict and the slash command will not appear.\
You can solve this problem by Syncing slash commands with discord in the bot's settings. This removes third-party service slash commands and leaves only those that were created in our application.
    
![sync](https://user-images.githubusercontent.com/70456337/200124426-6dbe69aa-1711-4838-9569-689b5e30f48f.gif)

### Integration Requires Code Grant
You can only get this error when trying to invite a bot to any server.\
Most likely, you have accidentally or unknowingly enabled the `Require OAauth2 Code Grant` parameter in your bot's settings in the [developer portal](https://discord.com/developers/applications).\
This is the reason why you get this error.

This parameter is required only for applications with scopes such as identify, email, and others to work with the user account in discord. But BDFD doesn't have such support, so you should not enable this parameter or choose any other scopes other than `bot`.

---
## App Issues

### The Ad Button Doesn't Work
> In this section, you can skip possible reasons to [Possible Solutions](#possible-solutions).

**The 1st Reason**\
Unstable Internet connection. Make sure your Internet connection is stable and not too slow, because you have to load the ad first to watch it. This is why you see " Loading ad...".

**The 2nd Reason**\
There're no more ads for you. If that's the reason, there's nothing we can do about it, it's the provider who provides the ads, not us. Try to see the ad later. If the case persists, go to [support server](https://discord.gg/botdesigner), create a ticket using the `!new' command and inform the staff about your problem by providing a screen recording longer than 30 seconds.

**The 3nd Reason**\
The advertising provider we use is blocked in your country or region. There is nothing we can do in this case.

#### Possible Solutions
1. Clearing the application cache and restarting it.
2. Using VPN services. This may be the best solution for the 2nd and 3rd reasons, and in some cases for the 1st reason.
3. In a desperate case, restart the smartphone and/or reinstall the app.
    > If you decide to reinstall the app, make sure that you are logged in to the app, otherwise you will lose access to your bots.

### Ghost Functions From The Changelog
In this troubleshooting, the easiest way to explain everything is through dialogue: 
- `Random Guy`: I was told by a friend that a new function, `$botOwnerID`, has just been added to the changelog or recently. I'm trying to use it, but it just doesn't work. What I mean is:\
    ![I5dLLUVB](https://user-images.githubusercontent.com/70456337/201180869-83b05576-617c-4bc1-b77c-87bacaac3b32.png)
- `Shiro`: This is normal. Right, the function has already been added and exists, but it can't be used at the moment. The nodes (the place where your bots work) have not yet been updated, or your exact node has not yet been updated. The update will slowly be released to each node over time. It isn't released to all nodes at once for the purpose of testing the stability and performance of the update.
- `Shiro`: Usually, all nodes are updated by the end of the month. 
- `Random Guy`: Allright, thank you! I will wait patiently!
- `Shiro`: You're welcome, Random Guy.

---
## That's Where The List Of Troubleshootings Ends
If you know of other problems that users often encounter or have suggestions, feel free to let us know on the [support server](https://discord.gg/botdesigner) or by [contributing](https://github.com/NilPointer-Software/bdfd-wiki/blob/dev/CONTRIBUTING.md)!