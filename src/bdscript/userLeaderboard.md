# $userLeaderboard
Returns the top ten user's username and value for the given user variable.

## Usage
```
$userLeaderboard[variableName;sortType (asc/desc)]
```

### Breakdown
- `variableName` - The variable to create the leaderboard for.
- `sortType` - Whether to sort the leaderboard in ascending (`asc`) or descending (`desc`) order.

> 🧙‍♂️ `$userLeaderbard` automatically generates a description. So, `$description` should not be used in the code.

## Example
```
$nomention
$userLeaderboard[Money;asc]
```
