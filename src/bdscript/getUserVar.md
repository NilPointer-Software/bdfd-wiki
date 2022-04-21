# $getUserVar
Returns a local user variable value.

## Usage
```php
$getUserVar[name;(user ID;guild ID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| variableName | The name of the variable to get. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| userID | The user to get the variable value for. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)
| guildID  | The server to get the variable value for. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** If no user is provided, the author is used.
**\*** If no user is provided, the server where the command was executed is used.

> **Find more information about variables [here](/src/guides/variables.md).**

## Example
```
$nomention
<@$mentioned[1;yes]> has $getUserVar[Money;$mentioned[1;yes]] coins.
```
![](https://user-images.githubusercontent.com/69215413/123357288-40157e00-d537-11eb-84bc-71f81764434f.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*
