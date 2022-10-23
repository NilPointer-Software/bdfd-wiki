# $userLeaderboard
Returns the top 10 users' usernames and values for a given user variable.

> 📌 [`$userLeaderboard`](./userLeaderboard.md) automatically generates a description. So, [`$description`](./description.md) of index `1` should be avoided in the code.

## Syntax
```
$userLeaderboard[Variable name;(Sort)]
```

### Parameters
- `Variable name` : The variable to create the leaderboard for.
- `Sort` : Sorts the leaderboard values in ascending (`asc`) or descending (`desc`) order. Defaults to `desc` (Optional).

## Example
```
$nomention
$userLeaderboard[Money;asc]
```
![Screenshot_20221023_113048](https://user-images.githubusercontent.com/95774950/197376578-309895b3-4e37-44c8-8bcc-acb73578fe78.png)

> 📌 Why my leaderboard is showing inaccurate values?\
Leaderboard values are not updated in real-time. The previous values are cached for a short duration. It will take about 5 minutes to show the updated values.
