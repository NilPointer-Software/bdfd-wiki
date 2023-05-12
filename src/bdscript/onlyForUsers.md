# $onlyForUsers
The command can only be executed by users with certain 'usernames'.

## Syntax
```
$onlyForUsers[Usernames;...;Error message]
```

### Parameters 
- `Usernames` `(Type: String || Flag: Emptiable)`: The names of the users that can execute this command. Use semicolons `;` as a separator to separate multiple usernames.
- `Error message` `(Type: String || Flag: Emptiable)`: The message that is returned when the command is used by a non-whitelisted user.

## Example
```
$nomention 
$onlyForUsers[Nicky;❌ Only users with the username `Nicky` can execute this command!]

$c[Put your code here.]
```
