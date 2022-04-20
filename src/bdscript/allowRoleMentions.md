# $allowRoleMentions
Disables the pings for the roles not provided, which means the role will be 'fake pinged' *(the role will be pinged, but users will not get notified of the ping)*. While the inputted allowed roles can be pinged *(and it will work like a regular notification-ping)*.

## Usage
```php
$allowRoleMentions[roleIDs;...]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| roleIDs | The roles that can be pinged, leave empty to disable pings for every role. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Example
```
$nomention
$allowRoleMentions[]
I'm pinging <@&858376972303204362>, but no one got notified; wow!
```
![](https://user-images.githubusercontent.com/69215413/128615927-d93f9e54-e8ad-4067-a363-eedb540d6b37.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*