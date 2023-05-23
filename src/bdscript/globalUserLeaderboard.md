# $globalUserLeaderboard
Returns the top ten user's username and value for the given global-user variable.

## Syntax
```
$globalUserLeaderboard[Variable name;Sort type (asc/desc)]
```

### Parameters
- `Variable name` `(Type: String || Flag: Required)`: The variable to create the leaderboard for.
- `Sort type` `(Type: Enum || Flag: Optional)`: The sort type of the values (default is `desc`). Sort types:
  - `asc` - Sorts the values in ascending order.
  - `desc` - Sorts the values in descending order.

> 🧙‍♂️ `$globalUserLeaderboard` automatically generates a description. So, `$description` should not be used in the code.

## Example
```
$nomention
$globalUserLeaderboard[Money;desc]
```
