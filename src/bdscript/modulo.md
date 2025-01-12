# $modulo
Returns remainder between numbers.

## Syntax
```
$modulo[A;B]
```

### Parameters 
- `A` `(Type: Integer || Flag: Required)`: The dividend.
- `B` `(Type: Integer || Flag: Required)`: The divisor.

## Example
```
$nomention
$modulo[$message[1];$message[2]]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 5 10
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Result: 5
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    Explanation: 5/10==0.5 => Remainder is 5
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 10 100
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Result: 10
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    Explanation: 10/100==0.10 => Remainder is 10
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 25 5
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Result: 0
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    Explanation: 25/5==5 => Remainder is 0
```

```admonish question title="What is this?"
How [`$message[]`](./messageComplex.md) works?
```
