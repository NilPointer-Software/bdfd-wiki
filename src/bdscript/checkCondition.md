# $checkCondition
Checks if a condition is `true` or `false`.

## Syntax
```
$checkCondition[Condition]
```

### Parameters 
- `Condition` `(Type: String || Flag: Required)`: The condition to check.

### Signs
`==` - Equal

`!=` - Not Equal

`<` -  Less Than

`>` - Greater Than

`>=` - Greater Than Or Equal To

`<=` - Less Than Or Equal To

## Example
```
$nomention
$checkCondition[$message==hello]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example BDFD
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    false
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example hello
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    true
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    Because hello==hello.
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```
