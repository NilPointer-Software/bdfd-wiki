# $isInteger
Checks if the specified value is an integer or not.

```admonish info
`true` means the value is an integer, `false` means it isn’t.
```

## Syntax
```
$isInteger[Value]
```

### Parameters
- `Value` `(Type: String || Flag: Required)`: The string that will be checked.

## Example
```
$nomention
Is integer? $isInteger[$message]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example number
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is integer? false
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 1.8
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is integer? false
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 4
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is integer? true
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```

<div class=function-playground>
  <h3>🤖 Playground</h3>
  <p>Here you can understand how this function works.</p>
  <div class="function-input">
    <p>Input:</p>
    <span id="play-code">$isInteger[<textarea id="play-input" rows="1" maxlength="20" oninput="isIntegerPlayground(this.value)">1.6</textarea>]</span>
  </div>
  <div class="function-output">
    <p>Output:</p>
    <span id="play-output">Is integer? true</span>
  </div>
</div>
