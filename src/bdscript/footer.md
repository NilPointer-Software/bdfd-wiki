# $footer
Sets the embed footer text.

## Syntax
```
$footer[Text;(Index)]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text to set the footer as. It cannot exceed more than 2048 characters.
- `Index` `(Type: Integer || Flag: Optional)`: What embed the footer text should belong to. The default is `1`. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$footer[Hello! I'm footer👋]
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
  embed:
    footer:
      text: Hello! I'm footer👋
```
