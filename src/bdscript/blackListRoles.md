# $blackListRoles
If the user has any role in the blacklist, they will not be able to run the command. This function uses role names, not role IDs.

## Usage
```php
$blackListRoles[roleNames;...;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| roleNames | The name(s) of the role(s) to blacklist. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage | Message returned when user has blacklisted role. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

### Example
```
$nomention
$blackListRoles[No Bot;❌ You have the 'No Bot' role, so you can't use this command!]
$c[Some code here]
```
> 🤔 **Explanation:** Users with the 'No Bot' role will not be able to use the command.

## Specifications
| Scripting Mode | Status
| --- | --- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*