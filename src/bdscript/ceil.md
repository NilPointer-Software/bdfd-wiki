# $ceil
Rounds the number **up** and returns the smallest integer greater than or equal to a specified number.

## Syntax
```
$ceil[Number]
```

### Parameters
- `Number` `(Type: Integer, Float || Flag: Required)`: The number that will be rounded.

## Example
```
$nomention
Result: $ceil[$message]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 6.3
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Result: 7
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example -6.4
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Result: -6
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 8
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Result: 8
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```

<div class=function-playground>
  <h3>🤖 Playground</h3>
  <p>Here you can understand how this function works.</p>
  <div class="function-input">
    <p>Input:</p>
    <span id="play-code">$ceil[<textarea id="play-input" rows="1" maxlength="20" oninput="ceilPlayground(this.value)">1</textarea>]</span>
  </div>
  <div class="function-output">
    <p>Output:</p>
    <span id="play-output">Result: 1</span>
  </div>
</div>
