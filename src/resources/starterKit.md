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
Pong!
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
$title[$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$image[$userAvatar[$mentioned[1;yes]]
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


### Deposit Command
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
