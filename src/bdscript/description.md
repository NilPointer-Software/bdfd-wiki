# $description
Adds a description to an embed.

## Syntax
```
$description[Message;(Index)]
```

### Parameters
- `Message` `(Type: String || Flag: Emptiable)`: The text to set the description as. It cannot exceed more than 4096 characters.
- `Index` `(Type: Integer || Flag: Optional)`: What embed the description should belong to. The default is `1`. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$description[This is a description!]
```

```discord yaml
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
    description: This is a description!
```
