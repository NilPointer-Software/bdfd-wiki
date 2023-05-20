# $clear
Deletes a certain amount of messages.

> 🧙‍♂️ When using just `$clear`, the author's message must include a number.

## Syntax
```
$clear
```

> 📌 Discord doesn't allow deleting messages in bulk which are over 2 weeks old.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `managemessages`

## Example
```
$nomention
$onlyPerms[managemessages;You need the 'MANAGE_MESSAGES' permission to use that!]
$argsCheck[>1;Please provide how many messages to clear. Usage: !purge (number)]
$clear
```
