# $addTimestamp[]
Adds a timestamp to a specific embed.

## Syntax
```
$addTimestamp[Index]
```

### Parameters
- `Index` `(Type: Integer || Flag: Optional)`: To which embed the timestamp should be added to. [(Learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$description[Hello world!]
$description[Embed with timestamp.;2]
$footer[That is the timestamp =>;2]
$addTimestamp[2]
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
- description: Hello world!
    footer:
      text: I love BDFD
  embeds:
  - description: Embed with timestamp.
```
