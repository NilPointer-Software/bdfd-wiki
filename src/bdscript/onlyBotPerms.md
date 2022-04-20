# $onlyBotPerms
The command can be executed if bot has all of the provided permissions in the current server, else the error message is returned.

## Usage
```php
$onlyBotPerms[permission;...;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| permission | The [permission(s)](/src/resources/permissions.md) that the bot needs. | [Permission](/src/resources/arguments/types.md#permission) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage | Message returned when the bot is missing permissions. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Examples
> 🧠 **Tip:** For these examples, insert the rest of your code under the `$onlyBotPerms[]` function.

### Example #1
*Bot must have ban permission:*
```
$nomention
$onlyBotPerms[ban;❌ I'm missing the ban permission!]
```

### Example #2
*Bot must have the kick permission:*
```
$nomention
$onlyBotPerms[kick;❌ I'm missing the kick permission!]
```

### Example #3
*Bot must have the manage messages permission:*
```
$nomention
$onlyBotPerms[managemessages;❌ I'm missing the manage messages permission!]
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*