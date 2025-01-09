# $toLowercase
Converts the provided text to lowercase format.

## Syntax
```
$toLowercase[Text]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text to convert.

## Example
```
$nomention
$toLowercase[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example BOT DESIGNER For discord
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    bot designer for discord
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```

<div class=function-playground>
  <h3>🤖 Playground</h3>
  <p>Here you can understand how this function works.</p>
  <div class="function-input">
    <p>Input:</p>
    <span id="play-code">$toLowercase[<textarea id="play-input" rows="1" maxlength="150" oninput="toLowercasePlayground(this.value)">Hello</textarea>]</span>
  </div>
  <div class="function-output">
    <p>Output:</p>
    <span id="play-output">hello</span>
  </div>
</div>
