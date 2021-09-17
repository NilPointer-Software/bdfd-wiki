# BDFD-Starter Kit
wip

## Sharecode
wip

### Using the Sharecode
wip

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
$setUserVar[Money;$sum[$getUserVar[Money;$authorID];$random[50;301]];$authorID]
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
$setVar[Money;$sum[$getVar[Money;$authorID];$random[50;301]];$authorID]
$endif

$if[$random[1;5]==2]
$description[You attempted begging but didn't get anything!]
$endif

$title[Begging]
$footer[$randomText[Imagine Begging;Oh, You Poor Little Beggar;Ew Begging]]
$addTimestamp
$reply
```
