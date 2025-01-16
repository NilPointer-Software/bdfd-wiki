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
$footer[It's a timestamp =>;2]
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
    description: Hello world!
  embeds:
  - description: Embed with timestamp.
    footer:
      text: It's a timestamp => <span class="discord-message-timestamp">Today at 00:00</span>
```

```admonish question title="What is this?"
How [`$description[]`](./description.md) and [`$footer[]`](./footer.md) works?
```
