# $numberSeparator
Separates the thousands in a number.

## Syntax
```
$numberSeparator[Number;(Separator)]
```

### Parameters 
- `Number` `(Type: Integer || Flag: Required)`: The number to apply the separator to.
- `Separator` `(Type: String || Flag: Vacantable)`: The separator between each thousand. The default is `,`.

## Example
```
$nomention
Result: $numberSeparator[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 5000
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Result: 5,000
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 2536000
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Result: 2,536,000
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```
