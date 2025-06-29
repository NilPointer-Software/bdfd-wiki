# $userLeaderboard
Returns the top 10 users' usernames and values for a given user variable.

```admonish warning
`$userLeaderboard[]` automatically generates a description. So, [`$description[]`](./description.md) of index `1` **should be avoided** in the code.
```

## Syntax
```
$userLeaderboard[Variable name;(Sort)]
```

### Parameters
- `Variable name` `(Type: String || Flag: Required)`: The variable to create the leaderboard for.
- `Sort` `(Type: Enum || Flag: Optional)`: Sorts the leaderboard values in ascending (`asc`) or descending (`desc`) order. Defaults to `desc`.

## Example
```
$nomention
$userLeaderboard[Money;asc]
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
    description: "1. RainbowKey - 2146\n
2. MineBartekSA - 1987\n
3. Menhera Bread - 863"
```

```admonish question title="Why is my leaderboard showing inaccurate values?"
Leaderboard values are not updated in real-time. The previous values are cached for a short duration. It will take about 5 minutes to show the updated values.
```
