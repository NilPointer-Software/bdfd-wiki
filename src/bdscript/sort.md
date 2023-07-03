# $sort
Sorts the provided numbers.

## Syntax
```
$sort[Numbers;...;Direction;Return amount;Separator]
```

### Parameters
- `Numbers` `(Type: Float, Integer || Flag: Required)`: The numbers to sort. Use semicolons `;` as a separator to separate multiple numbers.
- `Direction` `(Type: Enum || Flag : Required)`: The direction in which to sort. Direction types:
  - `asc` - Sorts the numbers in ascending order.
  - `desc` - Sorts the numbers in descending order.
- `Return amount` `(Type: Integer || Flag: Required)`: How many numbers will be returned. Use `-1` to return all numbers.
- `Separator` `(Type: String || Flag: Required)`: The separator between each number.

## Example
```
$nomention
$sort[8;5;9;1;3;asc;4; - ]
```
![example](https://user-images.githubusercontent.com/42785890/151884966-c05627cf-29c3-49ca-9f9d-46f3b1eb0215.png)
