# $getServerVar
Returns the value of the provided server variable.

## Usage
```php
$getServerVar[variableName;(guildID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| variableName | The name of the variable to get. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| guildID | The server to get the value for. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** If no `guildID` is inputted, then the current server is used.

> **Find more information about variables [here](/src/guides/variables.md).**

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*