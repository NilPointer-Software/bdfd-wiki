# $blackListUsers
Disables the command for users with usernames matching the ones provided.
## Syntax
```
$blackListUsers[usernames;...;error message]
```

 ### Parameters
- `usernames` `(Type: String || Flag: Emptiable)`: The usernames to blacklist. Separate names using `;`.
- `error message` `(Type: String || Flag: Emptiable)`: Message when user's name is in the blacklist.

## Example
```
$nomention
$blackListUsers[RainbowKey;❌ You can't use this command!]
Hello $username!
```

![example](https://user-images.githubusercontent.com/113303649/211997181-4ad65536-9b54-4f15-bd1f-07eb0df92686.png)

