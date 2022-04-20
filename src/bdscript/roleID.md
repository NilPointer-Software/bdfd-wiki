# $roleID
Returns a role's ID using its name, if no role is found, the function returns nothing.
> ⚠️ **Warning:** `$roleID[]` only searches roles in the current server.

## Usage
```php
$roleID[roleName]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| roleName | The role's name. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
Role ID For "$message": $roleID[$message]
```
![](https://user-images.githubusercontent.com/69215413/126243977-63a4ae68-2005-48b7-8560-31fc2397a872.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*