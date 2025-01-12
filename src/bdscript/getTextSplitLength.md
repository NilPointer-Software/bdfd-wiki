# $getTextSplitLength
Returns the number of splits in [`$textSplit[]`](./textSplit.md).

## Syntax
```
$getTextSplitLength
```

## Example
```
$nomention
$textSplit[hello%world%!;%]
> $getTextSplitLength
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
    <discord-quote>3</discord-quote>
```

> For more info, see the [Text Splitting Guide](../guides/general/textSplitting.md).
