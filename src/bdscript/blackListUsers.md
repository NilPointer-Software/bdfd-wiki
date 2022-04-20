# $blackListUsers
Disables the command for users with usernames matching the ones provided.

## Usage
```php
$blackListUsers[usernames;...;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| usernames | The usernames to blacklist. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage | Message when user's username is blacklisted. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

### Example
```
$nomention
$blackListUsers[noituri;kubastick;❌ You're too cool to use this command!]
$c[Some code here]
```
> 🤔 **Explanation:** Users with their username set to 'noituri' or 'kubastick' will not be able to run the command.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*