# $onlyBotPerms
The command can only be executed if bot has all of the provided permissions.

## Syntax
```
$onlyBotPerms[Permissions;...;Error message]
```

### Parameters 
- `Permissions` `(Type: Permission || Flag: Emptiable)`: The [permissions](../resources/permissions.md) that the bot needs to run the command. Use semicolons `;` as a separator to separate multiple permissions.
- `Error message` `(Type: String || Flag: Emptiable)`: The message to return when the bot doesn't have all the provided permissions.

## Example
```
$nomention
$onlyBotPerms[sendmessages;embedlinks;❌ Missing permissions!]
$description[Hey! I have `Embed links` permission.]
```
