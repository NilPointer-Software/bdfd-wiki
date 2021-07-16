# $banID
Bans a user using their ID.

## Usages
- There are three usages of the `$banID` command.

### Usage #1
```
$banID
```
> Gets the user to ban from the author's message. No reason will be provided in audit logs for the ban.

### Usage #2
```
$banID[reason]
```
> Gets the user to ban from the author's message. The 'reason' will show in audit logs.

### Usage #3
*(recommended)*

```
$banID[reason;userID]
```
> Gets the user to ban from the 'userID' field. The 'reason' will show up in audit logs. You can also leave the 'reason' field empty to provide no reason.

## Example
```
$nomention
$argsCheck[>1;Please provide a 'userID'. Usage: `!ban (user) <reason>`]
$onlyIf[$findUser[$message[1];no]!=;Failed to find user!]
$onlyPerms[ban;You need the 'ban' permission to use that command!]
$banID[$replaceText[$message;$message[1];;1];$findUser[$message[1];no]]
<@$findUser[$message[1];no]> was banned!
```
> 🧙‍♂️ The code above accepts both IDs or mentions to ban a user!

![example](https://user-images.githubusercontent.com/69215413/119884309-7ba03680-befe-11eb-80c7-93991297abf7.png)
