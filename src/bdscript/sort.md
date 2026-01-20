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
Result: $sort[8;5;9;1;3;asc;4; - ]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Result: 1 - 3 - 5 - 8
```
