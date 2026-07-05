# $textSplit
Splits the provided text by a given separator and saves the value temporarily.

## Syntax
```
$textSplit[Text;Separator]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text to split.
- `Separator` `(Type: String || Flag: Emptiable)`: The separator to split the text with. If this parameter is empty, it separates the text by each character.

## Example
```
$nomention
$textSplit[Hello-world-!;-]
> $splitText[2]
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
    <discord-quote>world</discord-quote>
```

```admonish question title="What is this?"
How [`$splitText[]`](./splitText.md) works?
```

```admonish info title="Read more"
For more information, read the [Text Splitting Guide](../guides/general/textSplitting.md).
```