# $membersCountReturns the number of members in the current server.

## Usage
```php
$membersCount[(presence)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| presence | The presence to filter members with. | [Enum](/src/resources/arguments/types.md#enum) ? [MemberPresence](/src/enumdefs/memberPresenses.md) | [Required](/src/resources/arguments/flags.md#required)

## Examples
### Example #1
```
$nomention
There are **$membersCount members** in this server!
```
![](https://user-images.githubusercontent.com/69215413/147861716-13c851b2-1815-45a6-903d-5a887b530422.png)

### Example #2
```
$nomention
There are **$membersCount[online] online members** in this server. 
```
![](https://user-images.githubusercontent.com/69215413/147861731-0533440c-5e15-45c9-9544-ad57c0caa199.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*