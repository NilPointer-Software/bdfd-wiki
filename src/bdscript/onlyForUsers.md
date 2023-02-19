# $onlyForUsers
The command can only be executed by users with certain 'usernames'.

## Usage
```
$onlyForUsers[usernames;...;errorMessage]
```

### Parameters 
- `usernames` `(Type : String || Flag : Emptiable)` : The name's of the users that this command can be executed by. Separate the usernames using `;`.
- `errorMessage` `(Type : String || Flag : Emptiable)` : The message that is returned when the command is used by a non-whitelisted user.
