# $toTitleCase
Converts the first letter of each word to uppercase in the provided text.

## Syntax
```
$toTitleCase[Text]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text to convert.

## Example
```
$nomention
$toTitleCase[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example bot designer for discord
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Bot Designer For Discord
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```

<div class=function-playground>
  <h3>🤖 Playground</h3>
  <p>Here you can understand how this function works.</p>
  <div class="function-input">
    <p>Input:</p>
    <span id="play-code">$toTitleCase[<textarea id="play-input" rows="1" maxlength="150" oninput="toTitleCasePlayground(this.value)">hello world!</textarea>]</span>
  </div>
  <div class="function-output">
    <p>Output:</p>
    <span id="play-output">Hello World!</span>
  </div>
</div>
