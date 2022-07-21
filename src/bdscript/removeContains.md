# $removeContains
Deletes messages that contain the provided phrases.

## Usage
```
$removeContains[phrases;howMany]
```

### Breakdown
- `phrases` - The phrases/words to delete, separate phrases using `;`.
- `howMany` - How many messages containing the provided phrases to delete. Max is 100.

## Example
```
$nomention
$onlyPerms[managemessages;❌ You are missing the `MANAGE_MESSAGES` permission!]
$removeContains[https://discord.gg/;discord.gg/;https://discord.com/invite;$noMentionMessage]
Successful purged `$noMentionMessage` messages containing invites!
```
