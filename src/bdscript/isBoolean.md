# $isBoolean
Returns whether the provided text is a boolean or not.

```admonish info
`true` means the text is a boolean, `false` means it isn’t.
```

## Syntax
```
$isBoolean[Text]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text to check.

### Supported Booleans
Positive | Negative 
-------- | --------
true | false
yes | no
on | off
enable | disable

## Example
```
$nomention
Is boolean? $isBoolean[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example yes
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is boolean? true
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example false
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Is boolean? true
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
    Is boolean? false
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```

<div class=function-playground>
  <h3>🤖 Playground</h3>
  <p>Here you can understand how this function works.</p>
  <div class="function-input">
    <p>Input:</p>
    <span id="play-code">$isBoolean[<textarea id="play-input" rows="1" maxlength="20" oninput="isBooleanPlayground(this.value)">true</textarea>]</span>
  </div>
  <div class="function-output">
    <p>Output:</p>
    <span id="play-output">Is boolean? true</span>
  </div>
</div>
