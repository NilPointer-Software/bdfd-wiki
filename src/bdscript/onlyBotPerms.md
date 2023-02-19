# $onlyBotPerms
The command can be executed if bot has all of the provided permissions.

## Usage
```
$onlyBotPerms[permissions;...;errorMessage]
```

### Parameters 
- `permissions` `(Type: Permission || Flag: Emptiable)`: The [permissions](../resources/permissions.md) that the bot needs to run the command. Use `;` as a separator for multiple permissions.
- `errorMessage` `(Type: String || Flag: Emptiable)`: The message to return when the bot doesn't have all the provided permissions.

### Example
```
$nomention
$onlyBotPerms[sendmessages;embedlinks;Missing permissions!]
$description[Hey! I have `embed links` permission.]
```
