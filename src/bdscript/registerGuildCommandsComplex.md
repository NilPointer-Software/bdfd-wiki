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
![example1](https://user-images.githubusercontent.com/111157596/233842038-1477b1f9-2e82-4cfc-90d9-ba318a9e8856.png)

### Example #2:
```
$nomention
$argsCheck[>1;Provide guild slash command names!]

$unregisterGuildCommands[$unescape[$toLowercase[$replaceText[$trimSpace[$message]; ;]]]]
Successfully registered the provided guild slash commands!
```
![example2](https://user-images.githubusercontent.com/111157596/233842084-413aec63-8cdd-4295-b3d3-0fe660b13792.png)
