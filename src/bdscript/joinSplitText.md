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
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    hello+world+!
```

```admonish question title="What is this?"
How [`$textSplit[]`](./textSplit.md) and [`$message`](./message.md) works?
```

```admonish info title="Read more"
For more information, read the [Text Splitting Guide](../guides/general/textSplitting.md).
```
