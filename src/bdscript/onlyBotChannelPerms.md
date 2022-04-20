# $onlyBotChannelPerms
The command can only be executed if the bot has all of the provided permissions in a certain channel, else the error message is returned.

## Usage
```php
$onlyBotChannelPerms[channelID;permission;...;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel to check the permissions of. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| permission | The [permissions](/src/resources/permissions.md) that the bot needs. | [Permission](/src/resources/arguments/types.md#permission) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage | Message returned when the bot is missing permissions. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

**\*** Use `$channelID` as the `channelID` argument for the current channel.