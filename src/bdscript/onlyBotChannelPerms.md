# $onlyBotChannelPerms
The command can only be executed if the bot has all of the provided permissions in a channel.

## Usage
```
$onlyBotChannelPerms[channelID;permissions;...;errorMessage]
```

### Parameters 
- `channelID` `(Type : Snowflake || Flag : Emptiable)` : The channel to check the permissions for. Use `$channelID` for the current channel.
- `permissions` `(Type : Permission || Flag : Required)` : The [permissions](../resources/permissions.md) that the bot needs to execute the command. Separate permissions with `;`.
- `errorMessage` `(Type : String || Flag : Emptiable)` : The message that is returned when the bot doesn't have the needed permissions.

### Example
```
$nomention
$onlyBotChannelPerms[$channelID;sendmessages;embedlinks;Missing permissions!]
$description[Hey! I have `embed links` permission in current channel.]
```
