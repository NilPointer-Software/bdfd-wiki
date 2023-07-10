# $unmute
*(deprecated)*

> 📌 As of December 2021, this function has been deprecated in favor of [`$untimeout[]`](./untimeout.md).

Unmutes the mentioned user.

## Syntax
```
$unmute[Muted]
```

### Parameters
- `Muted` `(Type: String || Flag: Required)`: The name of the "Muted" role (case sensitive).

### Permissions
Required permissions that the bot must have for this function to work properly:
- `manageroles`

## Example
```
$nomention
$onlyPerms[manageroles;❌ You are missing permission: `MANAGE_ROLES`.]
$unmute[Muted]
✅ Successfully unmuted $username[$mentioned[1]]#$discriminator[$mentioned[1]]!
```
![example](https://user-images.githubusercontent.com/69215413/125666289-5aecf227-0ae0-455e-8779-8501307a0894.png)
