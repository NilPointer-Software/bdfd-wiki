# $cropText
Crops the provided text. If text is cropped then the `ending` is added at the end of the text.

## Syntax
```
$cropText[Text;Max characters;Ending]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text to crop.
- `Max characters` `(Type: Integer || Flag: Required)`: The maximum amount of characters. Subsequent characters are removed.
- `Ending` `(Type: String || Flag: Emptiable)`: The text to end the cropped text with (if the text was cropped).

## Example
```
$nomention
$cropText[$message;50;...]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Hello everyone! This message is very cool. 😎 We hope you enjoy coding in BDFD, bye!
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hello everyone! This message is very cool. 😎 We ho...
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```
