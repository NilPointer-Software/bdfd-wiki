# $onlyPerms
The command can only be executed if the user running the command has all the provided permission(s), otherwise, the error message is returned.

## Usage
```php
$onlyPerms[permission;...;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| permissions | The [permissions](/src/resources/permissions.md) the user needs. | [Permission](/src/resources/arguments/types.md#permission) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage | Message returned when the user is missing permissions. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)


## Examples
> 🧠 **Tip:** For these examples, insert the rest of your code under the `$onlyPerms[]` function.

### Example #1
*User must have ban permission:*
```
$nomention
$onlyPerms[ban;❌ You are missing the ban permission!]
```

### Example #2
*User must have the kick permission:*
```
$nomention
$onlyPerms[kick;❌ You are missing the kick permission!]
```

### Example #3
*User must have the manage messages permission:*
```
$nomention
$onlyPerms[managemessages;❌ You are missing the manage messages permission!]
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*