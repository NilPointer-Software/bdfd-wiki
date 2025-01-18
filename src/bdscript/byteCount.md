# $byteCount
Returns the amount of bytes in the provided "`Text`".

## Syntax
```
$byteCount[Text]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text to return the byte count for.

## Example
```
$nomention
Your message has $byteCount[$message] bytes.
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Hello World!
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Your message has 12 bytes.
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
      !example Привет Мир!
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Your message has 20 bytes.
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 你好世界！
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Your message has 15 bytes.
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```

<div class=function-playground>
  <h3>🤖 Playground</h3>
  <p>Here you can understand how this function works.</p>
  <div class="function-input">
    <p>Input:</p>
    <span id="play-code">$byteCount[<textarea id="play-input" rows="1" maxlength="150" oninput="byteCountPlayground(this.value)">Text</textarea>]</span>
  </div>
  <div class="function-output">
    <p>Output:</p>
    <span id="play-output">Your message has 4 bytes</span>
  </div>
</div>
