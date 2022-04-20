# $onlyForRoles
The command can only executed by the provided roles (uses role names), else the error message is returned.

## Usage
```php
$onlyForRoles[roleName;...;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| roleName | The role name(s) to allow. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage | Message returned when the user doesn't have the required roles. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Example
```
$nomention
$onlyForRoles[Moderator;❌ You are missing the role named "Moderator"!]
Hello World!
```
> 🗒️ **Note:** Replace "Hello World!" with whatever code you are trying to make "Moderator" only.


**When the User has the Role:**

![](https://user-images.githubusercontent.com/69215413/148288170-dc073548-d477-4ea3-9ca6-37f225896998.png)

**When the User doesn't have the Role:**

![](https://user-images.githubusercontent.com/69215413/148288246-21bf142f-47d1-453e-8eb7-3f4ce2f339c0.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*