# $getTextSplitIndex 
Retrieves index from the provided value in [`$textSplit[]`](./textSplit.md). Returns `-1` if it couldn't find the value.

## Syntax
``` 
$getTextSplitIndex[Value]
``` 

### Parameters 
- `Value` `(Type: String || Flag: Emptiable)`: The value to search in the text split.

## Example 
```
$nomention
$textSplit[hello_world_!;_]
> $getTextSplitIndex[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example world
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <discord-quote>2</discord-quote>
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example bdfd
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <discord-quote>-1</discord-quote>
```

```admonish question title="What is this?"
How [`$textSplit[]`](./textSplit.md) works?
```

```admonish info title="Read more"
For more information, read the the [Text Splitting Guide](../guides/general/textSplitting.md).
```