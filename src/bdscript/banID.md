# $banID
Bans a user using their ID.

> **Warning:** Your bot must have the 'ban' permission. The bot cannot ban the server owner or users with higher roles than it. 'ban' is an elevated permission, so 2FA may be required for the bot owner [(click here for more info)](src/resources/2FA.md).

## Usages
There are three usages of this function.

### Usage #1
```
$banID
```
Gets the user's ID to ban from the author's message. No reason will be provided in audit logs for the ban.

### Usage #2
```
$banID[reason]
```
Gets the user to ban from the author's message. The 'reason' will show in audit logs.

### Usage #3
*(recommended)*

```
$banID[reason;userID]
```
Gets the user to ban from the 'userID' field. The 'reason' will show up in audit logs. You can also leave the 'reason' field empty to provide no reason.

## Example
```
$nomention
$if[$userExists[$message[1]]==true]
$banID[$message[1];$replaceText[$message;$message[1];;-1]]
Banned **$username[$message[1]]#$discriminator[$message[1]]**
$else
$onlyIf[$findUser[$message[1];no]!=;❌ Failed to find user!]
$banID[$replaceText[$message;$message[1];;1];$findUser[$message[1];no]]
Banned **$username[$findUser[$message[1];no]]#$discriminator[$findUser[$message[1];no]]**
$endif
$allowMention
$argsCheck[>1;❌ Please provide a 'user' to ban. Usage: `!ban (user) <reason>`]
$onlyBotPerms[ban;❌ I need the 'ban' permission to ban users!]
$onlyPerms[ban;❌ You need the 'ban' permission to use that command!]
```
> 🧙‍♂️ The code above accepts both IDs or mentions to ban a user!

![example](https://user-images.githubusercontent.com/69215413/119884309-7ba03680-befe-11eb-80c7-93991297abf7.png)