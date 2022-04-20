# $onlyForRoleIDs
The command can only executed by users with all of the provided roles (uses role IDs, unlike [`$onlyForRoles`](./onlyForRoles.md)).

## Usage
```php
$onlyForRoleIDs[roleID;...;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| roleID | The role ID(s) to allow. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage | Message returned when the user doesn't have the required roles. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*