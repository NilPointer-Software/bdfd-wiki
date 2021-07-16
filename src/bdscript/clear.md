# $clear
Deletes a certain amount of messages.

## Usages
- There are two usages for the `$clear` command.

### Usage #1
```
$clear
```
> 🧙‍♂️ When using just `$clear`, the author's message must include a number.

### Usage #2
```
$clear[howMany;userID;RemovePinnedMessages (yes/no)]
```

#### Breakdown
- `howMany` - How many messages to delete. (max 100)
- `userID` - If a userID is provided, the bot will only delete messages from that user. Optional.
- `RemovePinnedMessages` - Decides whether to delete pinned messages or not. Default is 'yes'. Optional.
