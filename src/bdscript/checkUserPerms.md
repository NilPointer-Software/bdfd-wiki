# $checkUserPerms
Returns 'true' if a user has all of the provided permissions, otherwise 'false' is returned.

## Usage
```
$checkUserPerms[userID;permissions]
```

### Breakdown
- `userID` - The user that the bot checks the permissions for.
- `permissions` - The [permissions](../resources/permissions.md) that the bot checks for. Separate permissions using `;`.

## Example
```
$nomention
$onlyIf[$checkUserPerms[$authorID;admin]==false;You can't use this command, because you are administrator. F in the chat!] 
You aren't a admin!
```
![example](https://user-images.githubusercontent.com/69215413/122832238-10594280-d2b9-11eb-9f79-a19f2f328239.png)
