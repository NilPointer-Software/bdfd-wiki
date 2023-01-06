# $blackListRolesIDs
Block users with certain roles from using the command. If the user has any role in the blacklist, they will not be able to run the command.

## Syntax
```
$blackListRolesIDs[role IDs;...;error message]
```

## Parameters
- `role IDs`: The roles that will be blacklisted. Separate role IDs using `;`.
- `error message`: The message that will be sent if the user has a role from the blacklist.

## Example
```
$nomention
$blackListRolesIDs[1009019299987476540;1014547313957539901;❌ You can't use this command!]
Pong! $ping ms
```

![example](https://user-images.githubusercontent.com/113303649/210046896-9e45b0c5-68f1-49b8-9bf0-90694df688cf.png)
