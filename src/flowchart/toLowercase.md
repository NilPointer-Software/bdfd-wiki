# To lowercasse
<div class="functionTags">
  <span id="FlowchartTag">Flowchart Bot</span>
</div>

Converts the text to lowercase format.

## Inputs
- `Text` `(Type: String || Own text: true)`: Content that should be lowercased.

## Outputs
- `Result`: The lowercased text.

## Example
Entry Point ➤ - ➤ Set response message (Content - Set response message (Result)), To lowercase (Text: `Hello world!`)
![example](https://github.com/user-attachments/assets/a0cfa8d0-7a16-4461-b39f-896d93aa1866)


```discord yaml
- username: Flowchart
  user_id: 566613317972394004
  color: "#748bd4"
  bot: true
  command:
    user_id: 803569638084313098
    author: RainbowKey
    command: /example
    color: "#E67E22"
  content: |
    hello world!
```
