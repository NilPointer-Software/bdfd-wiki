# $sqrt
Returns the square root of the specified number.

## Syntax
```
$sqrt[Number]
```

### Parameters
- `Number` `(Type: Integer, Float || Flag: Required)`: The number greater than or equal to 0.

## Example
```
$nomention
Result: $sqrt[$message]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 25
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Result: 5
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example -2
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    ❌ Function <code>$sqrt</code> at <code>2:9</code> returned an error: the input number can't be negative.
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 2
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Result: 1
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```

```admonish note
When calculating roots, use [`$enableDecimals[]`](..enableDecimals.md) to get decimal results for numbers like 1, 2, 3, 5, etc...
```

<div class=function-playground>
  <h3>🤖 Playground</h3>
  <p>Here you can understand how this function works.</p>
  <div class="function-input">
    <p>Input:</p>
    <span id="play-code">$sqrt[<textarea id="play-input" rows="1" maxlength="38" oninput="sqrtPlayground(this.value)">24</textarea>]</span>
  </div>
  <div class="function-output">
    <p>Output:</p>
    <span id="play-output">Result: 5</span>
  </div>
</div>
