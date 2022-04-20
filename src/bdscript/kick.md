# $kick
Kicks a user from the server.

> ⚠️ **Warning:** You can't kick users who are not in the server.

## Usage
```php
$kick[(userID;reason)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userID | The user to kick from the server. **\*** | [String](/src/resources/arguments/types.md#string) | [Optional](/src/resources/arguments/flags.md#optional)
| reason | The audit-log reason for the kick. | [String](/src/resources/arguments/types.md#string) | [Vacantable](/src/resources/arguments/flags.md#vacantable)

**\*** `$kick` when used without brackets, kicks the command author.

> ⚠️ **Warning:** When used with brackets, both the bot and user running the command must have the 'kick' permission. The bot cannot ban the server owner or users with higher roles than it. `kick` is an elevated permission, so 2FA may be required for the bot owner [(click me for more info)](/src/resources/2FA.md).

## Example
```
$nomention
$allowMention

$onlyBotPerms[kick;❌ I need the `KICK_MEMBERS` permission to do that!]
$onlyPerms[kick;❌ You need the `KICK_MEMBERS` permission to use that!]
$argsCheck[>1;❌ Please provide a user to kick. Usage: `!kick (user) <reason>`.]

$kick[$findUser[$message[1];no];$replaceText[$message;$message[1];;1]]

✅ Kicked `$username[$findUser[$message[1];no]]#$discriminator[$findUser[$message[1];no]]`!
```
![](https://user-images.githubusercontent.com/69215413/123518740-4742a600-d675-11eb-8581-1707b6989203.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*