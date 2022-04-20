# $getLeaderboardValue
Gets a leaderboard value.

## Usage
```php
$getLeaderboardValue[variableType;variableName;sort;position;(returnType)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| variableType | The variable type. | [Enum](/src/resources/arguments/types.md#enum) ? [VariableType](/src/enumdefs/variableTypes.md) | [Required](/src/resources/arguments/flags.md#required)
| variableName | The variable name to get the leaderboard value of. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| sort | Whether to sort the leaderboard ascendingly (`asc`) or descendingly (`desc`). | [Enum](/src/resources/arguments/types.md#enum) ? [SortType](/src/enumdefs/sortTypes.md) | [Required](/src/resources/arguments/flags.md#required)
| position | The leaderboard position to get, e.g `1`, `3`, etc. | [Integer](/src/resources/arguments/types.md#integer) | [Required](/src/resources/arguments/flags.md#required)
| returnType | The return value type. | [Enum](/src/resources/arguments/types.md#enum) ? [LeaderboardReturnType](/src/enumdefs/leaderboardReturnType.md) | [Optional](/src/resources/arguments/flags.md#optional)

## Example
```
$nomention
$title[**Global Leaderboard**]
$description[#1 - $getLeaderboardValue[globalUser;Money;asc;1]
#2 - $getLeaderboardValue[globalUser;Money;asc;2]
#3 - $getLeaderboardValue[globalUser;Money;asc;3]
#4 - $getLeaderboardValue[globalUser;Money;asc;4]
#5 - $getLeaderboardValue[globalUser;Money;asc;5]
#6 - $getLeaderboardValue[globalUser;Money;asc;6]
#7 - $getLeaderboardValue[globalUser;Money;asc;7]
#8 - $getLeaderboardValue[globalUser;Money;asc;8]
#9 - $getLeaderboardValue[globalUser;Money;asc;9]
#10 - $getLeaderboardValue[globalUser;Money;asc;10]]
$color[FFFF00]
$c[This example is for global-user variables]
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*