# $allowRoleMentions
Disables the pings for the users not provided, which means the user will be 'fake pinged' *(the user will be pinged, but the user will not get notified of the ping)*. While, the inputted allowed users are ones that can be pinged *(and it will work like a regular ping)*.

## Usage
```
$allowUserMentions[userIDs]
```

### Breakdown
- `userIDs` - The users that can be pinged, leave empty to disable pings for every user. Separate user IDs using `;`.

## Example
```
$nomention
$allowUserMentions[]
Hi <@696368083517964288>! I mentioned you, but you didn't get pinged.
```
