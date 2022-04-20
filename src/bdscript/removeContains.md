# $removeContains
Deletes messages in the current channel that contain the provided phrases.

## Usage
```php
$removeContains[phrases;...;howMany]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| phrases | The phrases to delete. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| howMany | How many messages containing the provided phrases to delete. **\*** | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

**\*** `howMany` must be between 1 and 100.

## Example
*A command that deletes messages containing invites:*
```
$nomention
$onlyPerms[managemessages;❌ You are missing the `MANAGE_MESSAGES` permission!]
$removeContains[discord.gg/;discordapp.com/invite/;discord.com/invite/;$noMentionMessage]
Successful purged `$noMentionMessage` messages containing invites!
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*