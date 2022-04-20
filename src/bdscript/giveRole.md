# $giveRole
Adds a role to the provided user.

## Usage
```php
$giveRole[roleID/userID;(roleID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| role/userID | **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| roleID | **\*\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** If `role/userID` is the only argument you pass, it is read as the `roleID` and gives that role to the mentioned user(s).

**\*\*** If the `roleID` argument is present, the first argument is read as the `userID`.

The old usage, `$giveRole[roleID]` is not recommended, you should use `$giveRole[userID;roleID]` instead.

## Examples
### Example #1
```
$nomention
$onlyBotPerms[manageroles;I need the `MANAGE_ROLES` permission to do that!]
$giveRole[$authorID;Updates]
$reply
You now have the **Updates** role, you'll get pinged for updates!
```
![](https://user-images.githubusercontent.com/69215413/147832516-dc418c3c-1020-45d8-9e61-5f8ab5130e05.png)

### Example #2
```
$nomention
$allowMention
$allowUserMentions[]
$allowRoleMentions[]
$onlyPerms[manageroles;You need the `MANAGE_ROLES` permission to use that!]
$onlyBotPerms[manageroles;I need the `MANAGE_ROLES` permission to do that!]
$onlyIf[$findUser[$message[1]]!=;❌ Failed to find user '$message[1]'!]
$onlyIf[$findRole[$replaceText[$message;$message[1];;1]]!=;❌ Failed to find role '$replaceText[$message;$message[1];;1]'!]
Added **$roleName[$findRole[$replaceText[$message;$message[1];;1]]]** to **$username[$findUser[$message[1]]]#$discriminator[$findUser[$message[1]]]**!
$giveRole[$findUser[$message[1]];$findRole[$replaceText[$message;$message[1];;1]]]
```
![](https://user-images.githubusercontent.com/69215413/147832356-228da6e4-2af3-4365-bdc1-7f006eba934e.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*