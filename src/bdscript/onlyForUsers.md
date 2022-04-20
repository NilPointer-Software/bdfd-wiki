# $onlyForUsers
The command can only be executed by users with certain usernames, else the error message is returned.

> ⚠️ **Warning:** `$onlyForUsers[]` can be unreliable as multiple users can have the same username, using [`$onlyForIDs[]`](./onlyForIDs.md) is a better practice.

## Usage
```php
$onlyForUsers[username;...;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| usernames | The name(s) of the user(s) that this command can be executed by. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage | Message returned when the command is used by a non-whitelisted user. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*