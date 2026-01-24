# $repeatMessage
Repeats the provided text a certain amount of times.

## Syntax
```
$repeatMessage[Amount;Text]
```

### Parameters
- `Amount` `(Type: Integer || Flag: Required)`: The number of times to repeat the given text (max `10` times).
- `Text` `(Type: String || Flag: Emptiable)`: The text to repeat.

## Example
```
$nomention
$repeatMessage[5;Hello World!]
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
    Hello World!Hello World!Hello World!Hello World!Hello World!
```

~~~admonish example

You can use a space at the end of "text" in the `Text` parameter, so there are spaces in-between repeats:

```
$nomention
$repeatMessage[5;Hello World! ]
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
    Hello World! Hello World! Hello World! Hello World! Hello World! 
```

~~~
