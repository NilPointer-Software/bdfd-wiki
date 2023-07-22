# $blackListRoles
Blocks users with certain role(s) from using the command. If the user has any role in the blacklist, they will not be able to run the command. Uses role names instead of role IDs.

## Syntax
```
$blackListRoles[Role names;...;Error message]
```

### Parameters
- `Role names` `(Type: String || Flag: Emptiable)`: The name(s) of the role(s) to blacklist. Use semicolons `;` as a separator to separate multiple role names.
- `Error message` `(Type: String || Flag: Emptiable)`: The message that will be sent if the user has a role from the blacklist.

## Example
```
$nomention
$blackListRoles[Owner;Bot;❌ You can't use this command!]
Pong! $ping ms
```
![example](https://user-images.githubusercontent.com/113303649/210046896-9e45b0c5-68f1-49b8-9bf0-90694df688cf.png)
