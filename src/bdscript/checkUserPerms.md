# $checkUserPerms
Returns 'true' if a user has all of the provided permissions, otherwise 'false' is returned.

## Usage
```$checkUserPerms[userID;permissions]```

### Breakdown
`userID` - The user that the bot checks the permissions for.

`permissions` - The [permissions](https://nilpointer-software.github.io/bdfd-wiki/guides/permissions.html) that the bot checks for. Separate permissions using `;`.

## Example
```
$nomention
You aren't a admin!
$onlyIf[$checkUserPerms[$authorID;admin]==false;You can't use this command, because you are administrator. F in the chat!] 
```
> This example requires unstable mode enabled!

![image](https://user-images.githubusercontent.com/69215413/122832238-10594280-d2b9-11eb-9f79-a19f2f328239.png)
