# $blackListUsers
Blocks certain users from using the command. Uses usernames instead of user IDs.

## Syntax
```
$blackListUsers[Usernames;...;Error message]
```

### Parameters
- `Usernames` `(Type: String || Flag: Emptiable)`: The username(s) to blacklist. Use semicolons `;` as a separator to separate multiple usernames.
- `Error message` `(Type: String || Flag: Emptiable)`: The message that will be sent when the username of the user running the command is blacklisted.

## Example
```
$nomention
$blackListUsers[RainbowKey;❌ You can't use this command!]
Hello $username!
```
![example](https://user-images.githubusercontent.com/113303649/211997181-4ad65536-9b54-4f15-bd1f-07eb0df92686.png)
