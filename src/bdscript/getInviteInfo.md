# $getInviteInfo
Returns information about a invite code.

## Usage
```php
$getInviteInfo[inviteCode;property]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| inviteCode | The invite code to get information about. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| property | The information to get about the invite. | [Enum](/src/resources/arguments/types.md#enum) ? [InviteProperties](/src/enumdefs/inviteProperties.md) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$argsCheck[>1;Please provide a valid invite code!]
$title[Invite Info]
$description[Uses: $getInviteInfo[$message;uses]
Channel: $getInviteInfo[$message;channel]
Date: $getInviteInfo[$message;creationDate]
Inviter: $getInviteInfo[$message;inviter]
Temporary: $getInviteInfo[$message;isTemporary]]
$color[#673ab7]
```
![](https://user-images.githubusercontent.com/69215413/122654170-88880280-d117-11eb-9123-947b48354ab6.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*