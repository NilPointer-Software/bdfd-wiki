# $removeContains
Removes messages that contains provided words. Removes up to the given `Amount` of latest messages.

## Syntax
```
$removeContains[Word;...;Amount]
```

### Parameters
- `Word` `(Type: String || Flag: Emptiable)`: The words/phrases to delete. Use semicolons `;` as a separator to separate multiple words/phrases.
- `Amount` `(Type: Integer || Flag: Required)`: The number of messages containing given words to delete (Max is `100`).

## Example
```
$nomention
$onlyPerms[managemessages;❌ You are missing the `MANAGE_MESSAGES` permission!]
$removeContains[https://discord.gg/;discord.gg/;https://discord.com/invite;$noMentionMessage]
Successful purged `$noMentionMessage` messages containing invites!
```
