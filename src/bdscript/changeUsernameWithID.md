# $changeUsernameWithID
Changes a user's nickname using their ID.

## Usage
```php
$changeUsernameWithID[userID;newNickname]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userID | The user to change the nickname for. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| newNickname | The user's new nickname. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$onlyPerms[changenicknames;❌ You don't have the `change nickname` permission!]
$onlyBotPerms[changenicknames;❌ I don't have the `change nickname` permission!]
$argsCheck[>1;Please provide text to set as your nickname!]
$changeUsernameWithID[$authorID;$message]
Changed your nickname to `$message`
```
![](https://user-images.githubusercontent.com/69215413/141666233-b58d59e5-e240-4f95-9f1b-595f7a38eb7f.png)

> 🤔 **Explanation:** This command changes the author's nickname.

## Specifications
| Scripting Mode | Status
| --- | --- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*