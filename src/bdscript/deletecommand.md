# $deletecommand
Deletes the author's message.
> ⚠️ **Warning:** The bot must have the `MANAGE_MESSAGES` permission to delete messages.

## Usage
```php
$deletecommand
```

## Examples
### Example #1
```
$nomention
$deletecommand
```
> 🤔 **Explanation:** All this example does is delete the author's message when the command is executed.

### Example #2
```
$nomention
$async[deletionDelay]
  $replyIn[10s]
  $deletecommand
$endasync
```
> 🤔 **Explanation:** This example deletes the author's message after 10 seconds.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*