# $globalUserLeaderboard
Returns the top ten user's username and value for the given global-user variable.

> 🧠 **Tip:** Want to customize your leaderboard more? Use [`$getLeaderboardValue`](./getLeaderboardValue.md).

## Usage
```php
$globalUserLeaderboard[variableName;sort]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| variableName | The variable name to generate leaderboard for. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| sort | Whether to sort the leaderboard ascendingly (`asc`) or descendingly (`desc`). | [Enum](/src/resources/arguments/types.md#enum) ? [SortType](/src/enumdefs/sortTypes.md) | [Required](/src/resources/arguments/flags.md#required)

> ⚠️ **Warning:** `$globalUserLeaderboard[]` automatically generates a embed description. So, [`$description[]`](./description.md) should not be used anywhere else in the code (unless it has a different [embed index](/src/resources/embedIndexes.md)).

## Example
```
$nomention
$title[Leaderboard]
$globalUserLeaderboard[Money;asc]
```
![](https://user-images.githubusercontent.com/69215413/147833489-9a0d83a6-69f2-45c5-adaa-bf8f20d9d6dc.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*