# $onlyForServers
The command can only be executed in the provided servers, else the error message gets returned.

## Usage
```php
$onlyForServers[serverID;...;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| serverID | The server(s) that the command can be executed in. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage | Message returned when the command is used in a non-whitelisted server.  | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*