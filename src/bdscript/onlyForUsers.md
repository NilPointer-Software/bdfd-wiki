# $onlyForUsers
The command can only be executed by users with certain 'usernames'.

## Usage
```
$onlyForUsers[usernames;errorMessage]
```

### Breakdown
- `username` - The name's of the users that this command can be executed by. Separate the usernames using `;`.
- `errorMessage` - The message that is returned when the command is used by a non-whitelisted user.
