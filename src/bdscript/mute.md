# $mute
Mutes the mentioned user.
> ⚠️ **Warning:** This function is depreacted! Use [`$timeout[]`](./timeout.md) instead.

## Usage
```php
$mute[mutedRoleName]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| mutedRoleName | The name of the 'Muted' role (case sensitive). | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)


## Example
```
$nomention
$onlyBotPerms[manageroles;❌ I'm  missing the permission `MANAGE_ROLES`!]
$onlyPerms[manageroles;❌ You are missing the permission `MANAGE_ROLES`!]
$mute[Muted]
✅ Successfully muted $username[$mentioned[1]]#$discriminator[$mentioned[1]]!
```
![](https://user-images.githubusercontent.com/69215413/123551542-4aef2f00-d740-11eb-82ca-381f5c5efcb3.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*