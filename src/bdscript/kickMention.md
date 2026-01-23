# $kickMention
A simplified version of [`$kick`](./kick.md). Kicks the mentioned user.

```admonish warning
The user running the command must have the "kick" permission.
```

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
✅ Kicked!
```

```admonish question title="What is this?"
How [`$noMentionMessage`](./noMentionMessage.md) works?
```