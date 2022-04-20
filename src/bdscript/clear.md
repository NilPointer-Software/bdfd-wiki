# $clear
Deletes a certain amount of messages.
> ⚠️ **Warning:** Bot must have the `MANAGE_MESSAGES` permission to clear messages.

## Usages
There are two usages of the this function.

### Usage #1
```php
$clear
```
Clear the provided amount of messages. When using just `$clear`, the author's message must include a number.

### Usage #2
```php
$clear[howMany;(userID;removePinnedMessages)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| howMany | How many messages to delete, max 100. | [Integer](/src/resources/arguments/types.md#integer) |[Required](/src/resources/arguments/flags.md#required)
| userID | If userID is provided, it will only delete messages from that user. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Vacantable](/src/resources/arguments/flags.md#vacantable) 
| removePinnedMessages | Decides whether to delete pinned messages or not. Default is 'yes'. | [Bool](/src/resources/arguments/types.md#bool) | [Optional](/src/resources/arguments/flags.md#optional)

## Example
```
$nomention
$onlyPerms[managemessages;❌ You need the `manage messages` permission to use that!]
$onlyBotPerms[managemessages;❌ I need the `manage messages` permission to do that!]
$onlyIf[$isNumber[$message]==true;❌ Please provide how many messages to clear. Usage: `!purge (number)`]

$deletecommand
$clear[$message]
```
> 🤔 **Explanation:** This command clears the provided amount of messages.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*