# $linesCount
Counts the lines of the text.

## Syntax
```
$linesCount[(Text)]
```

### Parameters
- `Text` `(Type: String || Flag: Required)`: The text to count the lines of.

## Example
```
$nomention
$linesCount[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Hello World!
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    1
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```