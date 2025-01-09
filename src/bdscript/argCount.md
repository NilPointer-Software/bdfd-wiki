# $argCount
Returns how many words (aka arguments/args) are in the provided text.

## Syntax
```
$argCount[Text]
```

### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text to get the word count for.

## Example
```
$nomention
Word count: $argCount[$message]
```
```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Hello noit!
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Word count: 2
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```

<div class=function-playground>
  <h3>🤖 Playground</h3>
  <p>Here you can understand how this function works.</p>
  <div class="function-input">
    <p>Input:</p>
    <span id="play-code">$argCount[<textarea id="play-input" rows="1" maxlength="150" oninput="argCountPlayground(this.value)">Hi</textarea>]</span>
  </div>
  <div class="function-output">
    <p>Output:</p>
    <span id="play-output">Word count: 1</span>
  </div>
</div>
