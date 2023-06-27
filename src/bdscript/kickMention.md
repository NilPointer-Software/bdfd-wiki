# $kickMention
A simplified version of `$kick`. Kicks the mentioned user.

> **Note:** The user running the command must have the "kick" permission.

## Syntax
```
$kickMention[Reason]
```

### Parameters
- `Reason` `(Type: String || Flag: Emptiable)`: The audit-log reason for the kick.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `kick`

## Example
```
$nomention
$kickMention[$noMentionMessage]
✅ Kicked `$username[$mentioned[1]]#$discriminator[$mentioned[1]]`!
```

![example](https://user-images.githubusercontent.com/69215413/123518897-0f882e00-d676-11eb-9c32-4ee9bddd787d.png)
