# $onlyBotChannelPerms
The command can only be executed if the bot has all of the provided permissions in a channel.

## Usage
```
$onlyBotChannelPerms[channelID;permissions;...;errorMessage]
```

### Breakdown
- `channelID` - The channel to check the permissions for. Use `$channelID` for the current channel.
- `permissions` - The [permissions](/src/resources/permissions.md) that the bot needs to execute the command. Separate permissions with `;`.
- `errorMessage` - The message that is returned when the bot doesn't have the needed permissions.

### Example
```
$nomention
$onlyBotChannelPerms[$channelID;sendmessages;embedlinks;Missing permissions!]
$description[Hey! I have `embed links` permission in current channel.]
```
