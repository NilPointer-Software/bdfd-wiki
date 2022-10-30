# $takeRole
Removes a role from the provided user.

> 📌 As of December 2021, this function has been deprecated in favor of [$roleGrant](./roleGrant.md).
>
>  📌 In order to remove a role from a user, the bot must have the `manageroles` permission.

## Usages
There are two usages of this function:

### Usage #1
#### Syntax
```
$takeRole[User ID;Role ID]
```
Removes a role from the provided user.

#### Parameters
- `User ID` : The user to remove the role for.
- `Role ID` : The role to remove from the user.

#### Example
```
$nomention
$allowRoleMentions[]
$allowUserMentions[]

$takeRole[$mentioned[1];$mentionedRoles[1]]
Removed <@&$mentionedRoles[1]> from <@$mentioned[1]>!
```
![Screenshot_20221029_194307](https://user-images.githubusercontent.com/95774950/198837000-f9647416-754f-4c99-8d5f-bb86dcfb84f8.png)

### Usage #2
#### Syntax
```
$takeRole[Role ID]
```
Removes the provided role from the mentioned users.

#### Parameters
- `Role ID`: The role to remove from the mentioned users.

#### Example
```
$nomention
$allowRoleMentions[]

$takeRole[$mentionedRoles[1]]
Removed <@&$mentionedRoles[1]> from the mentioned users!
```
![Screenshot_20221029_193751](https://user-images.githubusercontent.com/95774950/198837013-a39c8a69-29aa-4cec-b319-0b04365c200d.png)

## Related Resources
- [$roleGrant](./roleGrant.md)
- [$takeRole](./takeRole.md)
