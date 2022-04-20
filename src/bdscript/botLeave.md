# $botLeave
Forces the bot to leave a server.
> ⚠️ **Warning:** This function should be used with caution, and should only be able to be used by the bot owner.

## Usage
```php
$botLeave[guildID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| guildID | The ID of the server to leave. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

**\*** If the `guildID` argument is omitted and the function is used with no brackets, the bot will leave the current server.

## Examples
### Example #1
```
$nomention
$onlyForIDs[OWNER_ID;❌ Only my owner can use that command!]
$botLeave
```
> 🤔 **Explanation:** Forces the bot to leave the current server.

**\*** Replace 'OWNER_ID' with your Discord user ID.

### Example #2
```
$nomention
$onlyForIDs[OWNER_ID;❌ Only my owner can use that command!]
$onlyIf[$guildExists[$message]==true;❌ The 'serverID' provided doesn't exist.]
✅ Successfully left server: `$serverName[$message]`
$botLeave[$message]
```
> 🤔 **Explanation:** Forces the bot to leave the server provided in the user's message.

**\*** Replace 'OWNER_ID' with your Discord user ID.

## Specifications
| Scripting Mode | Status
| --- | --- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*