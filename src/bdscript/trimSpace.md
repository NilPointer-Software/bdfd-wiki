# $trimSpace
Removes all leading and trailing white-space characters from the provided text.

## Syntax
```
$trimSpace[Text]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text from which white-space characters will be removed.

## Example
```
$nomention
>$trimSpace[        Hi
        ]<
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
    >Hi<
```

<div class=function-playground>
  <h3>🤖 Playground</h3>
  <p>Here you can understand how this function works.</p>
  <div class="function-input">
    <p>Input:</p>
    <span id="play-code">$trimSpace[<textarea id="play-input" rows="1" maxlength="150" oninput="trimSpacePlayground(this.value)">  Hello world</textarea>]</span>
  </div>
  <div class="function-output">
    <p>Output:</p>
    <span id="play-output">Hello world</span>
  </div>
</div>
