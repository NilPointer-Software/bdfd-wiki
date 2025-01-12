# $round
Rounds up the provided number.

## Syntax
```
$round[Number;(Decimal place)]
```

### Parameters
- `Number` `(Type: Float || Flag: Required)`: The number to round.
- `Decimal place` `(Type: Integer || Flag: Vacantable)`: The number of decimal places to round the number to. Defaults to `0`.

## Example
```
$nomention
Result: $round[100.123;1]
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
    Result: 100.1
```

<div class=function-playground>
  <h3>🤖 Playground</h3>
  <p>Here you can understand how this function works.</p>
  <div class="function-input">
    <p>Input:</p>
    <span id="play-code">$round[<textarea id="play-input" rows="1" maxlength="20" oninput="roundPlayground(this.value)">1</textarea>]</span>
  </div>
  <div class="function-output">
    <p>Output:</p>
    <span id="play-output">Result: 1</span>
  </div>
</div>
