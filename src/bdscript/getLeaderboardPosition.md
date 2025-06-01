# $getLeaderboardPosition
Get position in a leaderboard for a given variable.

## Syntax
```
$getLeaderboardPosition[Variable type;Variable name;Sort type;(User ID)]
```

### Parameters
- `Variable type` `(Type: Enum || Flag: Required)`: The variable type. Variable types:
  - `user` - [User variable](../guides/introduction/variables.md#user-variables)
  - `globalUser` - [Global-User variable](../guides/introduction/variables.md#globalglobal-user-variables)
- `Variable name` `(Type: String || Flag: Required)`: The variable name to generate a leaderboard for.
- `Sort type` `(Type: Enum || Flag: Required)`: The sort type. Sort types:
  - `asc` - Sorts values in ascending order.
  - `desc` - Sorts values in descending order.
- `User ID`: `(Type: Snowflake  || Flag: Optional)`: The ID of a user from whom you want to get a position in a leaderboard.

## Example
```
$nomention
Your position in the leaderboard: $getLeaderboardPosition[user;Coins;desc]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Your position in the leaderboard: 2
```
