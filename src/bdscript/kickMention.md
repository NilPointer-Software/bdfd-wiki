# $kickMention
A simplified version of [`$kick[]`](./kick.md).\ 
Kicks the mentioned user.

> ⚠️ **Warning:** You can't kick users who are not in the server.

> ⚠️ **Warning:** When used with brackets, both the bot and user running the command must have the 'kick' permission. The bot cannot ban the server owner or users with higher roles than it. `kick` is an elevated permission, so 2FA may be required for the bot owner [(click me for more info)](/src/resources/2FA.md).

## Usage
```php
$kickMention[(reason)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| reason | The audit-log reason for the kick. | [String](/src/resources/arguments/types.md#string) | [Vacantable](/src/resources/arguments/flags.md#vacantable)

## Example
```
$nomention
$kickMention[$noMentionMessage]
✅ Kicked `$username[$mentioned[1]]#$discriminator[$mentioned[1]]`!
```
![](https://user-images.githubusercontent.com/69215413/123518897-0f882e00-d676-11eb-9c32-4ee9bddd787d.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*