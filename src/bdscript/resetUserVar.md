# $resetUserVar
Resets a user variable back to it's default value *(the one inputted in the app)* for every user, or just the provided user.
> ⚠️ **Warning:** Use this function wisely!

## Usage
```php
$resetUserVar[variableName;(userID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| variableName | The variable to reset. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| userID | The user to reset the variable for. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** If no user is provided, then the variable is reset for everyone!

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*