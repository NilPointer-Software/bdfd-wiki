# $enableDecimals
Enables/disables decimals in math functions.

## Syntax
```
$enableDecimals[Enable?]
```

```admonish note
You can use [`$round[]`](./round.md), [`$ceil[]`](./ceil.md), [`$floor[]`](./floor.md) for work with decimal numbers.
```

### Parameters
- `Enable?` `(Type: Bool || Flag: Required)`: Whether to enable decimals in math functions or not, `yes` means it's enabled and `no` means it's disabled.

```admonish example title="Explaination"
By default, decimals in math or random functions (e.g [`$sum[]`](./sum.md), [`$multi[]`](./multi.md), [`$random`](./random.md), etc) are disabled. The only use for this function is to enable decimals, if you want decimals enabled for math functions in that command.
```

## Example
```
$nomention
$enableDecimals[yes]
Result: $random[1;5]
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
    Result: 3.381
```

~~~admonish example

- Without `$enableDecimals[]` (or result with `$enableDecimals[no]`):

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
    Result: 3
```

~~~

```admonish question title="What is this?"
How [`$random[]`](./randomComplex.md) works?
```
