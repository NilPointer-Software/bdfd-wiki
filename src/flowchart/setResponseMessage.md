# Set response message
<div class="functionTags">
  <span id="FlowchartTag">Flowchart Bot</span>
</div>

Sets the response message for the command.

## Inputs
- `Content` `(Type: String || Own text: true)`: Content of the sent message.

### Flags
- ➤ Execute

## Example
Entry Point ➤ - ➤ Set response message (Content: `Hello`)
![example](https://github.com/user-attachments/assets/ed7d4f3d-c753-4cda-a3d6-57d8f8d4564d)

```discord yaml
- username: Flowchart
  user_id: 566613317972394004
  color: "#748bd4"
  bot: true
  command:
    user_id: 803569638084313098
    author: RainbowKey
    command: /test
    color: "#E67E22"
  content: |
    Hello
```
