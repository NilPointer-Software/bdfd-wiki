# $banID
Bans a user using their ID.


## Syntax
```
$ban[(reason;user ID)]
```

## Parameters
- `reason`: The reason for this action, which will be sent to the audit-log. _(Optional)_
> The reason for the ban can be viewed using `$getBanResaon[]`.
- `user ID`: Gets the user to ban. _(Optional)_
> [How to get user ID?](../resources/discordIDSystem.md#discords-id-system)
## Example
```
$nomention
$onlyPerms[ban;You need the 'ban' permission to use that command!]
$banID[$replaceText[$message;$message[1];;1];$findUser[$message[1];no]]
<@$findUser[$message[1];no]> was banned!
```
![example](https://user-images.githubusercontent.com/113303649/210044732-e0db835b-693d-483b-b4da-b57ae4e39081.png)


> [How does the `$findUser[]` function work?](../bdscript/findUser.md)
