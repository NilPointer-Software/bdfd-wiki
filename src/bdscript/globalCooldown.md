# $globalCooldown
Applies a cooldown to the command, the user can not run the command in any server until the 'duration' is up. Unlike [`$cooldown[]`](./cooldown.md), which only applies the cooldown to the user in the current server, not in every server globally.

## Usage
```php
$globalCooldown[duration;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| duration | The duration until the user can use this command again. | [Duration](/src/resources/arguments/types.md#duration) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage | The message to return when the cooldown is still ongoing. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

> 🧠 **Tip:** You can use `%time%` to get how much time is left until the cooldown is over in the 'errorMessage'.

## Example
```
$nomention
$globalCooldown[30s;You have to wait %time% before running that command again!]
$c[Your code here]
```
> 🤔 **Explanation:** This example sets a 30 second cooldown. Replace `$c[Your code here]` with whatever code you want to apply the cooldown to.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*