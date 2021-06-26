# $globalUserLeaderboard
Returns the top 10 user's name and value for the given variable.

## Usage
```
$globalUserLeaderboard[variableName;sortType (asc/desc)]
```

### Breakdown
`variableName` - The variable to create the leaderboard for.

`sortType` - Whether to sort the leaderboard in ascending (`asc`) or descending (`desc`) order.

> ⚠️ `$globalUserLeaderboard` automatically generates a description. So, `$description` should not be used in the code.

## Example
```
$nomention
$globalUserLeaderboard[Money;asc]
```
