# $serverLeaderboard
Creates a server leaderboard (top-10).

```admonish warning
`$serverLeaderboard[]` automatically generates a description. So, [`$description[]`](./description.md) of index `1` **should be avoided** in the code.
```

## Syntax
```
$serverLeaderboard[Variable name;(Sort type)]
```

### Parameters 
- `Variable name` `(Type: String || Flag: Required)`: The variable to create the leaderboard for.
- `Sort type` `(Type: Enum || Flag: Optional)`: The sort type of the values (default is `desc`). Sort types:
  - `asc` - Sorts the values in ascending order.
  - `desc` - Sorts the values in descending order.

## Example
```
$nomention
$serverLeaderboard[Reputation;asc]
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
  embed:
    description: "1. Bot Designer for Discord Official Server - 89\n
2. Bot Designer List - 63\n
3. B. Support - 60\n
4. BDFD Appeals Server - 42"
```

```admonish question title="Why is my leaderboard showing inaccurate values?"
Leaderboard values are not updated in real-time. The previous values are cached for a short duration. It will take about 5 minutes to show the updated values.
```
