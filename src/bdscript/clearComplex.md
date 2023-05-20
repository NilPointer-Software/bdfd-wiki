# $clear[]
Deletes the provided amount of messages.

## Syntax
```
$clear[Amount;(User ID;Remove pinned messages?)]
```

### Parameters
- `Amount` `(Type: Integer || Flag: Required)`: The amount of messages to delete. (maximal 100)
- `User ID` `(Type: Snowflake || Flag: Vacantable)`: If a user ID is provided, the bot will only delete messages from that user.
- `Remove pinned messages?` `(Type: Bool || Flag: Optional)`: Decides whether to delete pinned messages or not. The default is `yes`.

> 📌 Discord doesn't allow deleting messages in bulk which are over 2 weeks old.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `managemessages`

## Example
```
$nomention
$onlyPerms[managemessages;You need the 'MANAGE_MESSAGES' permission to use that!]
$argsCheck[>1;Please provide how many messages to clear. Usage: !purge (number)]
$clear[$message]
```
