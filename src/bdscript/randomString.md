# $randomString
Generates a random combination of letters/numbers.

## Syntax
```
$randomString[Length]
```

### Parameters
- `Length` `(Type: Integer || Flag: Required)`: How long the string should be (maximum is `10`).

## Example
```
$nomention
Random String: `$randomString[5]`
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Random String: <code>Nuxo5</code>
```

<div class=function-playground>
  <h3>🤖 Playground</h3>
  <p>Here you can understand how this function works.</p>
  <div class="function-input">
    <p>Input:</p>
    <span id="play-code">$randomString[<textarea id="play-input" rows="1" maxlength="2" oninput="randomStringPlayground(this.value)">5</textarea>]</span>
  </div>
  <div class="function-output">
    <p>Output:</p>
    <span id="play-output">Random String: Nuxo5</span>
  </div>
</div>
