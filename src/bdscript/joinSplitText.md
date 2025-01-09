# $joinSplitText
Joins [`$textSplit[]`](./textSplit.md) values with a provided separator.

## Syntax
```
$joinSplitText[Separator]
```

### Parameters
- `Separator` `(Type: String || Flag: Emptiable)`: The separator to be put between the text split values.

## Example
We are joining the text split value with a new line, replacing the provided separator in `$textSplit[]`.
```
$nomention
$textSplit[$message;-]
$joinSplitText[+]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example hello-world-!
- username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    hello+wolrd+!
```

> For more info, see the [Text Splitting Guide](../guides/general/textSplitting.md).
