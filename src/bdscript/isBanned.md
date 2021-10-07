# $isBanned
Returns 'true' if user is banned, otherwise it returns 'false'. 
> ⚠️ Bot must have the 'BAN_MEMBERS' permission to use `$isBanned[]`.

## Usage
```
$isBanned[userID]
```

### Breakdown
- `userID` - The user to check.

## Example
```
$nomention
$onlyPerms[ban;You need the 'BAN_MEMBERS' permission to use that!]
$onlyBotPerms[ban;I need the 'BAN_MEMBERS' permission to do that!]
$argsCheck[>1;Please provide a user ID to unban!]
$onlyIf[$isBanned[$message[1]]==true;User isn't banned!]
$unbanID
Unbanned **$username[$message[1]]#$discriminator[$message[1]]**
```
