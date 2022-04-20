# $resetServerVar
Resets a server variable back to it's default value *(the one inputted in the app)* **for every server**.
> ⚠️ **Warning:** Use this function wisely!

## Usage
```php
$resetServerVar[variableName]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| variableName | The variable to reset. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*