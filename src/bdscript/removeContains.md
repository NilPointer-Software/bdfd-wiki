# $removeContains
Removes messages that contains provided words. It will remove `amount` last messages (replace 'amount' with number) (max 100 messages) 

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
