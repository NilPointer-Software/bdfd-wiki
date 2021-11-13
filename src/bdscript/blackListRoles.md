# $blackListRoles
Blocks users with certain role(s) from using the command. If the user has any role in the blacklist, they will not be able to run the command. Uses role names instead of role IDs.

## Usage
```
$blackListRoles[roleNames;errorMessage]
```

### Breakdown
- `roleNames` -  The name(s) of the role(s) to blacklist. Separate role names using `;`.
- `errorMessage` - The message that appears when the user has a role in the blacklist.

### Example
```
$nomention
$blackListRoles[No Bot;❌ You have the 'No Bot' role, so you can't use this command!]
$c[Some code here]
```