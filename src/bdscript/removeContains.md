# $removeContains
Removes messages that contains provided words. Removes up to the given `amount` of latest messages (max 100) 

## Usage
```
$removeContains[word;...;Amount]
```

### Parameters
- `word` `(Type : String || Flag : Emptiable)` : The phrases/words to delete, separate phrases using `;`.
- `Amount` `(Type : Integer || Flag : Required)` : How many messages containing the provided phrases to delete. Max is 100.

## Example
```
$nomention
$onlyPerms[managemessages;❌ You are missing the `MANAGE_MESSAGES` permission!]
$removeContains[https://discord.gg/;discord.gg/;https://discord.com/invite;$noMentionMessage]
Successful purged `$noMentionMessage` messages containing invites!
```
