# $toUppercase
Converts the provided text to uppercase format.

## Syntax
```
$toUppercase[Text]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text to convert.

## Example
```
$nomention
$toUppercase[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example bot designeR FOR DISCORD
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    BOT DESIGNER FOR DISCORD
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```

<div class=function-playground>
  <h3>🤖 Playground</h3>
  <p>Here you can understand how this function works.</p>
  <div class="function-input">
    <p>Input:</p>
    <span id="play-code">$toUppercase[<textarea id="play-input" rows="1" maxlength="150" oninput="toUppercasePlayground(this.value)">hello</textarea>]</span>
  </div>
  <div class="function-output">
    <p>Output:</p>
    <span id="play-output">HELLO</span>
  </div>
</div>
