# $banID
Bans a user using their ID.

> ⚠️ **Warning:** Your bot must have the 'ban' permission. The bot cannot ban the server owner or users with higher roles than it. 'ban' is an elevated permission, so 2FA may be required for the bot owner [(click here for more info)](/src/resources/2FA.md).

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

$allowMention
$argsCheck[>1;❌ Please provide a 'user' to ban. Usage: `!ban (user) <reason>`]
$onlyBotPerms[ban;❌ I need the 'ban' permission to ban users!]
$onlyPerms[ban;❌ You need the 'ban' permission to use that command!]

$if[$userExists[$message[1]]==true]
$onlyIf[$isBanned[$message[1]]==false;❌ User is already banned!]
$banID[$replaceText[$message;$message[1];;-1];$message[1]]
Banned **$username[$message[1]]#$discriminator[$message[1]]**

$else

$onlyIf[$mentioned[1]!=;❌ Failed to find user!]
$onlyIf[$isBanned[$mentioned[1]]==false;❌ User is already banned!]
$banID[$noMentionMessage;$mentioned[1]]
Banned **$username[$mentioned[1]]#$discriminator[$mentioned[1]]**

$endif
```
> 📝 **Note:** The code above accepts both IDs or mentions to ban a user!

## Specifications
| Scripting Mode | Status
| --- | --- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*