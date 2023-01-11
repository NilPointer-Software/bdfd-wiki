# $kick
Kicks a user.

## Usages
There are two usages of the `$kick` function.

### Usage #1 
```
$kick
```
Kicks the user who ran the command.

### Usage #2
```
$kick[userID;(reason)]
```
Kicks the provided user.

#### Parameters
- `userID` `(Type : Snowflake || Flag : Required)` : The user to kick from the server.
- `reason` `(Type : String || Flag : Vacantable)` : The audit-log reason for the kick. Optional.

## Example
```
$nomention
$onlyPerms[kick;❌ You need the `kick` permission to use that!]
$argsCheck[>1;❌ Please provide a user to kick. Usage: `!kick (user) <reason>`.]
$kick[$mentioned[1];$noMentionMessage]
✅ Kicked `$username[$mentioned[1]]#$discriminator[$mentioned[1]]`!
```

![example](https://user-images.githubusercontent.com/69215413/123518740-4742a600-d675-11eb-8581-1707b6989203.png)
