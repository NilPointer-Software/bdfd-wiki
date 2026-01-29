# $random[]
Returns a random number between `min` and `max`.

```admonish warning
`$random[]` never returns the 'max' value, as it's right side exclusive range. Basically, to get a random number between 1 and 5; you'd put 6 as the `Max` instead of 5 i.e `$random[1;6]` will return: 1, 2, 3, 4, 5.
```

## Syntax
```
$random[Min;Max]
````

### Parameters 
- `Min` `(Type: Integer, Float || Flag: Required)`: The minimum value.
- `Max` `(Type: Integer, Float || Flag: Required)`: The maximum value.

```admonish failure
The `Max` value cannot be greater than or equal to the `Min` value.
- ❌ `Max` <= `Min`
- ✅ `Max` > `Min`
```

## Example
```
$nomention
The random number is **$random[1;21]**
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
    The random number is <b>16</b>
```

~~~admonish example
You can use [`$enableDecimals[]`](./enableDecimals.md) to disable or enable decimals:

```
$nomention
$enableDecimals[yes]
The random number is **$random[1;21**
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
    The random number is <b>13.1</b>
```

~~~
