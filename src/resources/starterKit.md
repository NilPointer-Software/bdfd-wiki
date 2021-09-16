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

#### Unlocked
```
$nomention
$onlyPerms[managechannels;You need the `MANAGE_CHANNELS` permission to use that command!]
$modifyChannelPerms[$mentionedChannels[1;yes];+sendmessages;+addreactions;$guildID]
Successfully unlocked <#$mentionedChannels[1;yes]>!
```
