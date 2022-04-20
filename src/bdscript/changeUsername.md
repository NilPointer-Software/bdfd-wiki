# $changeUsername
Changes the mentioned user's nickname.

## Usage
```php
$changeUsername[newNickname]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| newNickname | The user's new nickname. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$onlyPerms[managenicknames;❌ I'm missing permission `manage nicknames`!]
$onlyPerms[managenicknames;❌ You're missing permission `manage nicknames`!]
$argsCheck[>2;Invalid arguments provided! Correct Usage: `!nickname (user) (text)`]

$changeUsername[$noMentionMessage]
Changed <@$mentioned[1]>'s nickname to `$noMentionMessage`.
```
![](https://user-images.githubusercontent.com/69215413/120035233-406c3900-bfcc-11eb-8d1a-31d69da21622.png)

## Specifications
| Scripting Mode | Status
| --- | --- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*