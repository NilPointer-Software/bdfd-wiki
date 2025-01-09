# $unescape
Unescapes semicolons `;` from the provided text. It allows interpreting of escaped semicolons as unescaped ones.

## Syntax
```
$unescape[Text]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text to unescape.

## Example
```
$nomention
$randomText[$unescape[$message]]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example a;b;c
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    b
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example a;b;c
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    b
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example a;b;c
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    a
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example a;b;c
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    c
```

```admonish question title="What is this?"
How [`$randomText[]`](./randomText.md) and [`$message`](./message.md) works?
```
