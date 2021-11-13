# $blackListUsers
Disables the command for users with usernames matching the ones provided.

## Usage
```
$blackListUsers[usernames;errorMessage]
```

### Breakdown
- `usernames` - The usernames to blacklist. Separate names using `;`.
- `errorMessage` - Message when user's name is in the blacklist.

### Example
```
$nomention
$blackListUsers[noituri;❌ You're too cool to use this command!]
$c[Some code here]
```