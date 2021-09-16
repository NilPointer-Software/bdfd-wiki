# BDFD-Starter Kit
wip

## Sharecode
wip

### Using the Sharecode
wip

## Includes
### Ban Command
```php
$onlyPerms[ban;You need the `BAN_MEMBERS` permission to use that command!]
$nomention
$ban[$noMentionMessage]
Successfully banned <@$mentioned[1]>!
```
### Kick Command
```php
$nomention
$onlyPerms[kick;You need the `KICK_MEMBERS` permission to use that command!]
$kickMention[$noMentionMessage]
Successfully kicked <@$mentioned[1]>!
```

### Purge Command
```php
$onlyPerms[managemessages;You need the `MANAGE_MESSAGES` permission to use that command!]
$if[$mentioned[1]!=]
$clear[$noMentionMessage;$mentioned[1]]
$endif

$if[$mentioned[1]==]
$clear[$noMentionMessage]
$endif
````

### Mute Command
```php
$nomention
$onlyPerms[manageroles;You need the `MANAGE_ROLES` permission to use that command!]
$mute[Muted]
Successfully muted <@$mentioned[1]>!
```

### Unmute Command
```php
$nomention
$onlyPerms[manageroles;You need the `MANAGE_ROLES` permission to use that command!]
$unmute[Muted]
Successfully unmuted <@$mentioned[1]>!
```
