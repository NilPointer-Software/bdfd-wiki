# $blackListRolesIDs
Block users with certain roles from using the command. If the user has any role in the blacklist, they will not be able to run the command. This function uses role IDs, not role names.

## Usage
```php
$blackListRolesIDs[roleIDs;...;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| roleIDs | The roles that will be blacklisted.  | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage | Message returned if the user has a blacklisted role. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Example
```
$nomention
$blackListRolesIDs[730739881072132166;727999173600739398;❌ You aren't allowed to use this command!]
$c[Some code here]
```
> 🤔 **Explanation:** Users with the roles '730739881072132166' and/or '727999173600739398' will not be able to use the command.

## Specifications
| Scripting Mode | Status
| --- | --- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*