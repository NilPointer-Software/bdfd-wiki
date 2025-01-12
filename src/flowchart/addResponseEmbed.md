# Add response embed
<div class="functionTags">
  <span id="FlowchartTag">Flowchart Bot</span>
</div>

Adds embed to the response message for the command.

## Inputs
- `Title` `(Type: String || Own text: true)`: Title of the embed message.
- `Description` `(Type: String || Own text: true)`: Description of the embed message.
- `Footer` `(Type: String || Own text: true)`: Footer of the embed message.

### Flags
- ➤ Execute

## Example
Entry Point ➤ - ➤ Add response embed (Title: `Meowing Title`, Description: `Meowing Description`, Footer: `Cats shall rule this footer!`)

![image](https://github.com/user-attachments/assets/c99109d3-20df-44a8-be09-a7f5506e71f5)

```discord yaml
- username: Flowchart
  user_id: 566613317972394004
  color: "#748bd4"
  bot: true
  command:
    user_id: 713752533763489893
    author: Fai-Kun
    command: /meow
    color: "#E67E22" 
  content: ""
  embed:
    title: "Meowing Title"
    description: "Meowing Description!"
    footer: 
      text: "Cats shall rule this footer!"
```
