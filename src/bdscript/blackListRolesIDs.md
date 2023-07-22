# $blackListRolesIDs
Blocks users with certain roles from using the command. If the user has any role in the blacklist, they will not be able to run the command.

## Syntax
```
$blackListRolesIDs[Role IDs;...;Error message]
```

### Parameters
- `Role IDs` `(Type: Snowflake || Flag: Emptiable)`: The role(s) that will be blacklisted. Use semicolons `;` as a separator to separate multiple role IDs.
- `Error message` `(Type: String || Flag: Emptiable)`: The message that will be sent if the user has a role from the blacklist.

## Example
```
$nomention
$blackListRolesIDs[1009019299987476540;1014547313957539901;❌ You can't use this command!]
Pong! $ping ms
```
![example](https://user-images.githubusercontent.com/113303649/210046896-9e45b0c5-68f1-49b8-9bf0-90694df688cf.png)
