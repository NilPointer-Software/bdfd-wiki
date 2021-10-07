# BDFD-Starter Kit
wip

> **Note:** Economy features are not built-in to the sharecode, this is because you must choose whether to have a global or local economy. You may paste codes from [Economy#Global](#economy-global) or [Economy#Local](#economy-local).

## Sharecode
**Run `s!sharecode` in our [community server](https://botdesignerdiscord.com/discord) to get the current up-to-date sharecode.**

### Configuration
**#1:** Go to the *Bot Designer for Discord* app.

**#2:** Click "Create new bot".\
![](https://user-images.githubusercontent.com/69215413/133850258-838f56d8-1d22-4f2a-9332-2a1cadb40858.PNG)

**#3:** Input your bot's name and token. Then, provide the sharecode you got from `s!sharecode`. Finally, agree to Discord's and BDFD's Terms of Service.\
![](https://user-images.githubusercontent.com/69215413/133850653-584529f7-f480-4bc7-8411-01440c8fce48.PNG)\
![](https://user-images.githubusercontent.com/69215413/133850765-399e1155-a1f4-4325-b168-d2999d4223fd.PNG)

**#4:** Edit the `botOwnerID` variable - Set the value to your [user ID](https://dis.gd/findmyid).\
![](https://user-images.githubusercontent.com/69215413/133851404-04afffad-1b85-43da-84e4-1ec97dea4e56.PNG)\
![](https://user-images.githubusercontent.com/69215413/133851500-387f4f6e-58b3-4e74-b402-cf12080d8bdc.PNG)\
![](https://user-images.githubusercontent.com/69215413/133851597-3a456c0b-250e-4453-85ba-d1aaf395df5d.PNG)\
![](https://user-images.githubusercontent.com/69215413/133851727-cd054072-5ad1-408e-9707-8c41b67e5365.PNG)\
![](https://user-images.githubusercontent.com/69215413/133851785-855436d8-fe6b-42d2-a5bf-4f85d2da03cd.PNG)


## Features
### Core
#### Ping Command
```
$nomention
$reply
🏓 Pong!
```

#### Statics Command
```
$nomention
$title[Stats]
$footer[Made with ❤️ by <your name>]
$description[Server Count: $serverCount
Total Members: $allMembersCount
Commands Count: $commandsCount]
```

### Utils
#### Avatar Command
```
$nomention
$title[$username[$findUser[$message]]#$discriminator[$findUser[$message]]'s Avatar]
$image[$userAvatar[$findUser[$message]]?size=4096]
$addButton[no;$userAvatar[$findUser[$message]]?size=2048;Download;link;no;]
```

#### Roll Command
```
$nomention
$if[$isNumber[$message[1]]==false]
🎲 You rolled `$random[1;7]` 
$endif

$if[$isNumber[$message[1]]==true]
🎲 You rolled `$random[1;$sum[$message[1];1]]`
$endif
```

### Moderation
#### Ban Command
```
$nomention
$onlyPerms[ban;You need the `BAN_MEMBERS` permission to use that command!]
$ban[$noMentionMessage]
Successfully banned <@$mentioned[1]>!
```
#### Kick Command
```
$nomention
$onlyPerms[kick;You need the `KICK_MEMBERS` permission to use that command!]
$kickMention[$noMentionMessage]
Successfully kicked <@$mentioned[1]>!
```

#### Purge Command
```
$nomention
$onlyPerms[managemessages;You need the `MANAGE_MESSAGES` permission to use that command!]
$if[$mentioned[1]!=]
$clear[$noMentionMessage;$mentioned[1]]
$endif

$if[$mentioned[1]==]
$clear[$noMentionMessage]
$endif
````

#### Mute Command
```
$nomention
$onlyPerms[manageroles;You need the `MANAGE_ROLES` permission to use that command!]
$mute[Muted]
Successfully muted <@$mentioned[1]>!
```

#### Unmute Command
```
$nomention
$onlyPerms[manageroles;You need the `MANAGE_ROLES` permission to use that command!]
$unmute[Muted]
Successfully unmuted <@$mentioned[1]>!
```

#### Lock Command
```
$nomention
$onlyPerms[managechannels;You need the `MANAGE_CHANNELS` permission to use that command!]
$modifyChannelPerms[$mentionedChannels[1;yes];-sendmessages;-addreactions;$guildID]
Successfully locked <#$mentionedChannels[1;yes]>!
```

#### Unlock Command
```
$nomention
$onlyPerms[managechannels;You need the `MANAGE_CHANNELS` permission to use that command!]
$modifyChannelPerms[$mentionedChannels[1;yes];+sendmessages;+addreactions;$guildID]
Successfully unlocked <#$mentionedChannels[1;yes]>!
```

#### Slowmode Command
```
$nomention
$onlyPerms[managechannels;You need the `MANAGE_CHANNELS` permission to use that command!]
$slowmode[$mentionedChannels[1;yes];$message[1]]
Set <#$mentionedChannels[1;yes]>'s slowmode to `$message[1]`!
```

### Developer-Only
#### Eval Command
```
$nomention
$onlyForIDs[YOUR_ID;]
$eval[$noMentionMessage]
```
> Replace `YOUR_ID` with your Discord user ID.

### Leave-Server Command
```
$nomention
$onlyForIDs[YOUR_ID;❌ Only my developer can use that command!]
$onlyIf[$guildExists[$message]==true;❌ The 'serverID' provided doesn't exist. Usage: `!leave (serverID)`]
✅ Successfully left server: `$serverName[$message]`
$botLeave[$message]
```
> Replace `YOUR_ID` with your Discord user ID.

### Server-Names Command
```
$nomention
$onlyForIDs[$getVar[botOwnerID];❌ Only my developer can use that!]
$serverNames
```
> **Note:** `$serverNames` returns a maxium of 10 servers at a time.

> Replace `YOUR_ID` with your Discord user ID.

### Economy: Local


#### Balance Command
```
$nomention
$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]] currently has `$getUserVar[money;$mentioned[1;yes]]` coins!
```

#### Work Command
```
$nomention
$globalCooldown[1h;Please wait %time%, then use that command again!]
$setUserVar[money;$sum[$getUserVar[money;$authorID];$random[300;1001]];$authorID]
You worked for 1 hour and earned `$random[300;1001]` coins!
```

#### Beg Command
```
$nomention
$cooldown[1m;❌ Please wait %time% then use that command again!]
$if[$random[1;5]!=2]
$description[You begged $randomText[someone;a moderator;<@$serverOwner>;your friends] and gained `$random[50;301]` coins!]
$setUserVar[money;$sum[$getUserVar[money;$authorID];$random[50;301]];$authorID]
$endif

$if[$random[1;5]==2]
$description[You attempted begging but didn't get anything!]
$endif

$title[Begging]
$footer[$randomText[Imagine Begging;Oh, You Poor Little Beggar;Ew Begging]]
$addTimestamp
$reply
```

#### Deposit Command
```
$nomention
$argsCheck[>1;Please provide the needed arguments! Usage: `!deposit (number/all)`]

$if[$getUserVar[money;$authorID]==0]
You have nothing to deposit!

$else
$if[$checkContains[$toLowercase[$noMentionMessage];all;max]==true]
$setUserVar[bank;$getUserVar[money;$authorID]]
$setUserVar[money;$sub[$getUserVar[money;$authorID];$getUserVar[money;$authorID]];$authorID]

$else
$if[$isNumber[$noMentionMessage]==false]
Failed to convert `$noMentionMessage` to a valid number!

$else
$if[$getUserVar[coins]>=$noMentionMessage]
$setUserVar[bank;$sum[$getUserVar[bank;$authorID];$noMentionMessage];$authorID]
$setUserVar[money;$sub[$getUserVar[money;$authorID];$noMentionMessage];$authorID]
Deposited `$noMentionMessage` coins into your bank!

$else
$if[$getUserVar[money;$authorID]<=$noMentionMessage]
You can not deposit more money than you have!
$endif
$endif
$endif
$endif
$endif
```

### Economy: Global

#### Beg Command
```
$nomention
$globalCooldown[1m;❌ Please wait %time% then use that command again!]
$if[$random[1;5]!=2]
$description[You begged $randomText[someone;a moderator;<@$serverOwner>;your friends] and gained `$random[50;301]` coins!]
$setVar[money;$sum[$getVar[money;$authorID];$random[50;301]];$authorID]
$endif

$if[$random[1;5]==2]
$description[You attempted begging but didn't get anything!]
$endif

$title[Begging]
$footer[$randomText[Imagine Begging;Oh, You Poor Little Beggar;Ew Begging]]
$addTimestamp
$reply
```

#### Deposit Command
```
$nomention
$argsCheck[>1;Please provide the needed arguments! Usage: `!deposit (number/all)`]

$if[$getVar[money;$authorID]==0]
You have nothing to deposit!

$else
$if[$checkContains[$toLowercase[$noMentionMessage];all;max]==true]
$setUserVar[bank;$getVar[money;$authorID]]
$setVar[money;$sub[$getVar[money;$authorID];$getVar[money;$authorID]];$authorID]

$else
$if[$isNumber[$noMentionMessage]==false]
Failed to convert `$noMentionMessage` to a valid number!

$else
$if[$getUserVar[coins]>=$noMentionMessage]
$setUserVar[bank;$sum[$getUserVar[bank;$authorID];$noMentionMessage];$authorID]
$setVar[money;$sub[$getVar[money;$authorID];$noMentionMessage];$authorID]
Deposited `$noMentionMessage` coins into your bank!

$else
$if[$getVar[money;$authorID]<=$noMentionMessage]
You can not deposit more money than you have!
$endif
$endif
$endif
$endif
$endif
````
