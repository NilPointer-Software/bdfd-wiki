# $isValidHex
Checks whether the given color hex is valid or not.

```admonish note
`true` means the color hex is valid, `false` means it isn’t.
```

## Syntax
```
$isValidHex[Color hex]
```

### Parameters
- `Color hex` `(Type: String || Flag: Emptiable)`: The [color hex](https://htmlcolorcodes.com/color-picker) to check.

## Example
```
$nomention
Is valid HEX? $isValidHex[$message]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example #E67E22
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is valid HEX? true
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example E67E22
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is valid HEX? true
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example text
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is valid HEX? false
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```

```admonish tip title="Color Picker"
You can use our ["Color" tool](../tools/color.md) to choose colors!
```

<div class=function-playground>
  <h3>🤖 Playground</h3>
  <p>Here you can understand how this function works.</p>
  <div class="function-input">
    <p>Input:</p>
    <span id="play-code">$isValidHex[<textarea id="play-input" rows="1" maxlength="20" oninput="isValidHexPlayground(this.value)">#E67E22</textarea>]</span>
  </div>
  <div class="function-output">
    <p>Output:</p>
    <span id="play-output">Is valid HEX? true</span>
  </div>
</div>

