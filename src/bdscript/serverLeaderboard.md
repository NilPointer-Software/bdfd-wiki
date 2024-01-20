# $serverLeaderboard
Creates a server leaderboard (top-10).

> 🧙‍♂️ `$serverLeaderboard` automatically generates a description. So, `$description` should not be used in the code.

## Syntax
```
$serverLeaderboard[Variable name;(Sort type)]
```

### Parameters 
- `Variable name` `(Type: String || Flag: Required)`: The variable to create the leaderboard for.
- `Sort type` `(Type: Enum || Flag: Optional)`: The sort type of the values (default is `desc`). Sort types:
  - `asc` - Sorts the values in ascending order.
  - `desc` - Sorts the values in descending order.
