# $registerGuildCommands[]
Registers provided guild slash commands in the current guild.

> 📝 Slash commands doesn't need to be enabled or marked as guild command.

## Syntax
```
$registerGuildCommands[Slash command name;...]
```

### Parameters
- `Slash command name` `(Type: String || Flag: Required)`: Name of the guild slash command to register. Use semicolons `;` as a separator to separate multiple guild slash command names.

## Examples
### Example #1:
```
$nomention
$registerGuildCommands[help]
Successfully registered the guild slash command `/help`!
```
``` discord yaml
- user_id: 1081869405245407262
  username: mrskraba101
  color: "#E67E22"
  content: |
    !register
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Successfully registered the guild slash command `/help`!
  ```
### Example #2:
```
$nomention
$argsCheck[>1;Provide guild slash command names!]

$registerGuildCommands[$unescape[$toLowercase[$replaceText[$trimSpace[$message]; ;]]]]
Successfully registered the provided guild slash commands!
```
``` discord yaml
- user_id: 1081869405245407262
  username: mrskraba101
  color: "#E67E22"
  content: |
    !register ban ; help ; work
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Successfully registered the provided guild slash commands!
  ```

How [`$unescape[]`](./unescape.md), [`$toLowercase[]`](./toLowercase.md), [`$replaceText[]`](./replaceText.md), [`$trimSpace[]`](./trimSpace.md), [`$message`](./message.md) and [`$argsCheck[]`](./argsCheck.md) works?
