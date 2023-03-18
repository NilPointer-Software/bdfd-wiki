# $clear
Deletes a certain amount of messages.

## Usages
There are two usages of the `$clear` function.

### Usage #1
```
$clear
```
> When using just `$clear`, the author's message must include a number.

### Usage #2
```
$clear[how many?;user ID;(remove pinned messages?)]
```

#### Parameters
- `how many?` `(Type: Integer || Flag: Required)`: How many messages to delete. (max 100)
- `user ID` `(Type: Snowflake || Flag: Vacantable)`: If a userID is provided, the bot will only delete messages from that user.
- `remove pinned messages?` `(Type: Bool || Flag: Optional)`: Decides whether to delete pinned messages or not. The default is `yes`.

> Discord doesn't allow deleting messages in bulk which are over 2 weeks old.

## Example
```
$nomention
$onlyPerms[managemessages;You need the 'MANAGE_MESSAGES' permission to use that!]
$argsCheck[>1;Please provide how many messages to clear. Usage: !purge (number)]
$clear[$message]
```
