# $blackListIDs
Blocks certain users from using the command.

## Usage
```php
$blackListIDs[userIDs;...;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userIDs | The users to blacklist from using the command. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
 | errorMessage | Message returned when user is blacklisted. |[String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable) |

## Example
```
$nomention
$blackListIDs[566613317972394004;246604909451935745;❌ You can't use this command!]
$c[Some code here]
```
> 🤔 **Explanation:** Users with the ID '566613317972394004' or '246604909451935745' will not be able to use the command. 

## Specifications
| Scripting Mode | Status
| --- | --- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*