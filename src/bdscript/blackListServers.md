# $blackListServers
Disables the command for the provided servers.

## Usage
```php
$blackListServers[serverIDs;...;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| serverIDs | The servers to blacklist. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage | Message returned when the server is blacklisted. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Example
```
$nomention
$blackListServers[566363823137882154;169256939211980800;❌ Server is blacklisted!]
$c[Some code here]
```
> 🤔 **Explanation:** The servers '566363823137882154' and '169256939211980800' will not be able to use the command.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*