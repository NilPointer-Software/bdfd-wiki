# $editThread
Modifies an existing thread.

> ⚠️ **Warning:** Your bot should have the `MANAGE_THREADS` permission in order to edit threads.

## Usage
```php
$editThread[threadID;(name;archived;archiveDuration;locked;slowmode)]
```
> 🧠 **Tip:** You can use `!unchanged` as an argument if you don't want to change the field.

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| threadID | The thread channel to edit. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| name | The new name of the thread. | [String](/src/resources/arguments/types.md#string) | [Optional](/src/resources/arguments/flags.md#optional)
| archived | Whether to archive this thread. | [Bool](/src/resources/arguments/types.md#bool) | [Optional](/src/resources/arguments/flags.md#optional)
| archiveDuration | The archive duration of this thread in minutes. | [Enum](/src/resources/arguments/types.md#enum) ? [ThreadArchiveDuration](/src/enumdefs/threadArchiveDurations.md) | [Optional](/src/resources/arguments/flags.md#optional)
| locked | Whether to lock this thread. **\*** | [Bool](/src/resources/arguments/types.md#bool) | [Optional](/src/resources/arguments/flags.md#optional)
| slowmode | The slowmode of this channel in seconds. | [Integer](/src/resources/arguments/types.md#integer) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** Archived threads can't be locked.

## Example
```
$nomention
$var[threadID;$startThread[Hello World;$channelID;;1440;yes]]
$editThread[$var[threadID];!unchanged;!unchanged;!unchanged;!unchanged;5]
```

> 🤔 **Explanation:** This example creates a thread then sets the thread's slowmode to 5 seconds.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*