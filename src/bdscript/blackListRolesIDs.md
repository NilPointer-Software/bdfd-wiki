# $blackListRolesIDs
Block users with certain roles from using the command. If the user has any role in the blacklist, they will not be able to run the command.

## Usage
```
$blackListRolesIDs[roleIDs;errorMessage]
```

### Breakdown
- `roleIDs` - The roles that will be blacklisted. Separate roleIDs using `;`.
- `errorMessage` - The message that sends if the user has a role in the blacklist.

## Example
```
$nomention
$blackListRolesIDs[730739881072132166;727999173600739398;❌ You aren't allowed to use this command!]
$noMentionMessage
```
