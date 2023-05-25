# $getLeaderboardValue
Gets a leaderboard value.

## Syntax
```
$getLeaderboardValue[Variable type;Variable name;Sort type;Position;(Return type)]
```

### Parameters
- `Variable type` `(Type: Enum || Flag: Required)`: The type of the variable. Variable types:
  - `user` - [User variable](../guides/introduction/variables.md#user-variables)
  - `server` - [Server variable](../guides/introduction/variables.md#server-variables)
  - `globalUser` - [Global-User variable](../guides/introduction/variables.md#globalglobal-user-variables)
- `Variable name` `(Type: String || Flag: Required)`: The variable name to generate the leaderboard for.
- `Sort type` `(Type: Enum || Flag: Required)`: The sort type. Sort types:
  - `asc` - Sorts the values in ascending order.
  - `desc` - Sorts the values in descending order.
- `Position` `(Type: HowMany || Flag: Required)`: The leaderboard position to get, e.g `1`, `3`, etc.
- `Return type` `(Type: Enum || Flag: Optional)`: The return type. Return types:
  - `id` - Returns the ID of the user belonging to this position.
  - `value` - Returns the variable value of this position.
  - none - If this field is excluded, it will return `Username - Value`.

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
$c[This is for global-user variables.]
```
