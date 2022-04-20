# $ban
Bans the mentioned user.

> ⚠️ **Warning:** Both the bot and user running the command must have the 'ban' permission. The bot cannot ban the server owner or users with higher roles than it. `ban` is an elevated permission, so 2FA may be required for the bot owner [(click me for more info)](/src/resources/2FA.md).

## Usage
```php
$ban[(reason)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| reason | The reason for this ban, which is sent to the [audit log](https://discord.fandom.com/wiki/Audit_Log). | [String](/src/resources/arguments/types.md#string) | [Vacantable](/src/resources/arguments/flags.md#vacantable)

## Examples
### Example #1
*(without optional fields)*
```
$nomention
$ban
<@$mentioned[1]> was banned!
```
![](https://user-images.githubusercontent.com/69215413/119858159-32da8480-bee2-11eb-922d-0fb05a5aa7c9.png)

### Example #2
*(with optional fields)*
```
$nomention
$ban[$noMentionMessage]
<@$mentioned[1]> was banned!
```
![](https://user-images.githubusercontent.com/69215413/119860514-661e1300-bee4-11eb-965e-e3c7fa78b5ca.png)

## Specifications
| Scripting Mode | Status
| --- | --- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*