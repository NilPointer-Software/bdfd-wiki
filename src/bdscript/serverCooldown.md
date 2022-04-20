# $serverCooldown
Sets a server cooldown. After the command is used, no one in the server will be able to run the command until the 'duration' is up.

## Usage
```php
$serverCooldown[duration;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| duration | The duration of this cooldown. | [Duration](/src/resources/arguments/types.md#duration) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage | The error to return when the cooldown is still ongoing. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
  
> 🧙‍♂️ You can use `%time%` to get how much time is left on the cooldown, in 'errorMessage'.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*