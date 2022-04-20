# $allowUserMentions
Disables the pings for the users not provided, which means the user will be 'fake pinged' *(the user will be pinged, but will not get notified of the ping)*. While the inputted allowed users can be pinged *(and it will work like a regular notification-ping)*.

## Usage
```php
$allowUserMentions[userIDs;...]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userIDs | The users that can be pinged, leave empty to disable pings for every user. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Example
```
$nomention
$allowUserMentions[]
Hi <@$authorID>! I mentioned you, but you didn't get notified.
```
![](https://user-images.githubusercontent.com/69215413/141665755-4b2a2d10-3157-4098-9301-816030f25f4c.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*