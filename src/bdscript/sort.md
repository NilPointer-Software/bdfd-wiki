# $sort
Sorts provided numbers. Amount of numbers can be set to -1 if you'd like to return every number

## Syntax
```
$sort[numbers;...;direction;return amount;separator]
```

### Parameters
- `numbers` `(Type: Float, Integer || Flag: Required)`: Sorts numbers separated by *;* (ex: 1;2;3)
- `direction` `(Type: Enum || Flag : Required)`: The direction in which to sort:
  - `asc` - ascending
  - `desc` - descending
- `return amount` `(Type: Integer || Flag: Required)`:  How many numbers will be returned. Use `-1` to generate all numbers
- `separator` `(Type: String || Flag: Required)`: The separator between each number.

## Example
```
$nomention
$sort[8;5;9;1;3;asc;4; - ]
```
![image](https://user-images.githubusercontent.com/42785890/151884966-c05627cf-29c3-49ca-9f9d-46f3b1eb0215.png)
