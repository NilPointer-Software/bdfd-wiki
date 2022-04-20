# $isBanned
Returns 'true' if user is banned, otherwise it returns 'false'. 
> ⚠️ Bot must have the 'BAN_MEMBERS' permission to use `$isBanned[]`.

## Usage
```php
$isBanned[userID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userID | The user to check. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
*Using `$isBanned[]` to check if a user is already banned, in a unban command:*
```
$nomention
$onlyIf[$isBanned[$message[1]]==true;User isn't banned!]
$onlyPerms[ban;You need the 'BAN_MEMBERS' permission to use that!]
$onlyBotPerms[ban;I need the 'BAN_MEMBERS' permission to do that!]
$argsCheck[>1;Please provide a user ID to unban!]
$unbanID
Unbanned **$username[$message[1]]#$discriminator[$message[1]]**
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*