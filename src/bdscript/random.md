# $random
Returns a random number between 0 and 9.

## Syntax
```
$random
```

## Example
```
$nomention
The random number is **$random**
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
    The random number is <b>4</b>
```

~~~admonish example
You can use [`$enableDecimals[]`](./enableDecimals.md) to disable or enable decimals:

```
$nomention
$enableDecimals[yes]
The random number is **$random**
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
    The random number is <b>2.3</b>
```

~~~