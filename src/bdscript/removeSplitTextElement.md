# $removeSplitTextElement
This function removes an element from the separated text by the specified index.

## Syntax
```
$removeSplitTextElement[Index]
```

### Parameters
- `Index` `(Type: Integer || Flag: Required)`: The index of the `$textSplit[]` value to remove.

## Example
```
$nomention
$textSplit[hello-world-!;-]
$removeSplitTextElement[3]
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
    <discord-quote>hello-world</discord-quote>
```