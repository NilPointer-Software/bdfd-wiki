# $onlyBotChannelPerms
The command can only be executed if the bot has all of the provided permissions in a channel.

## Syntax
```
$onlyBotChannelPerms[Channel ID;Permissions;...;Error message]
```

### Parameters 
- `Channel ID` `(Type: Snowflake || Flag: Emptiable)`: The channel to check the permissions for. Use `$channelID` for the current channel.
- `Permissions` `(Type: Permission || Flag: Required)`: The [permissions](../resources/permissions.md) that the bot needs to execute the command. Use semicolons `;` as a separator to separate multiple permissions.

- `Error message` `(Type: String || Flag: Emptiable)`: The message that is returned when the bot doesn't have the needed permissions.

## Example
```
$nomention
$onlyBotChannelPerms[$channelID;sendmessages;embedlinks;❌ Missing permissions!]
$description[Hey! I have `Embed links` permission in the current channel.]
```
