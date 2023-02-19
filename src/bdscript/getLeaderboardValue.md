# $getLeaderboardValue
Gets a leaderboard value.

## Usage
```
$getLeaderboardValue[variableType (user/globalUser/server);variableName;sortType;position;(returnType (id/value))]
```

- `variableType` `(Type: Enum || Flag: Required)`: The variable type.
- `variableName` `(Type: String || Flag: Required)`: The variable name to generate the leaderboard for.
- `sortType` `(Type: Enum || Flag: Required)`: Whether to sort the values in ascending (asc) or descending (desc) order.
- `position` `(Type : HowMany || Flag : Required)` : The leaderboard position to get, e.g `1`, `3`, etc.
- `returnType` `(Type : Enum || Flag : Optional)` : The return type. Types:
  - none - If this field is excluded, it will return `Username - Value`.
  - id - Returns the ID of the user belonging this position.
  - value - Returns the variable value of this position.

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
