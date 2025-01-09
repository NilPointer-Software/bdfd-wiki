# $isNumber
Returns whether the provided value is a number or not.

```admonish tip
`true` means the value is a number, `false` means it isn’t.
```

## Syntax
```
$isNumber[Value]
```

### Parameters
- `Value` `(Type: String || Flag: Emptiable)`: The text to check.

## Example
```
$nomention
Is number? $isNumber[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 52
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is number? true
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 52.4
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is number? true
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example hello
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is number? false
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```

<div class=function-playground>
  <h3>🤖 Playground</h3>
  <p>Here you can understand how this function works.</p>
  <div class="function-input">
    <p>Input:</p>
    <span id="play-code">$isNumber[<textarea id="play-input" rows="1" maxlength="20" oninput="isNumberPlayground(this.value)">1</textarea>]</span>
  </div>
  <div class="function-output">
    <p>Output:</p>
    <span id="play-output">Is number? true</span>
  </div>
</div>
