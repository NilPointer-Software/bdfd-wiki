# $threadRemoveMember
Removes a member from a thread.

## Usage
```php
$threadRemoveMember[threadID;userID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| threadID | The ID of the thread channel to remove this user from. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| userID | The user to remove from the thread. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$threadRemoveMember[878305123707785218;$authorID]
```
![](https://user-images.githubusercontent.com/69215413/130261147-1d44af9b-a951-4286-88a3-1908702d3fe0.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*