# $editSplitText
This function replaces the element at the specified index with a new element instead of the previous one.

## Syntax
```
$editSplitText[Index;Value]
```

### Parameters
- `Index` `(Type: Integer || Flag: Required)`: The index of the element to edit.
- `Value` `(Type: String || Flag: Required)`: The new value to assign to the provided index.

## Example
```
$nomention
$textSplit[Hello-world-!;-]
$editSplitText[2;bdfd]
> $joinSplitText[-]
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
    <discord-quote>Hello-bdfd-!</discord-quote>
```

```admonish question title="What is this?"
How [`$textSplit[]`](./textSplit.md) and [`$joinSplitText[]`](./joinSplitText.md) works?
```

```admonish info title="Read more"
For more information, read the the [Text Splitting Guide](../guides/general/textSplitting.md).
```
