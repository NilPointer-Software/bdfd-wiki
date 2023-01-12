# $banID[]
Bans a user using their ID.
## Syntax
```
$banID[reason;(user ID)]
```
## Parameters
- `reason`: The reason for this action, which will be saved in the audit-log.
> Use `$getBanReason[]` to get the ban reason.
- `user ID`: Gets the user to ban. _(Optional)_
## Example
```
$nomention
$onlyAdmin[You need the `admim` permission to use that command!]
$argsCheck[>1;Please provide a `user`. Syntax: `!ban (user) <reason>`]
$onlyIf[$findUser[$message[1];no]!=;Failed to find user!]
<@$findUser[$message;no]> was banned!
$banID[$replaceText[$message;$message[1];;1];$findUser[$message[1];no]]
```
![exsmple](https://user-images.githubusercontent.com/113303649/212003254-1573bdd3-6417-4dd1-afd0-23f5ed1fa297.png)
> [How `$findUser[]` works?](./findUser.md)
