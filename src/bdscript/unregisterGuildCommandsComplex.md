# $unregisterGuildCommands[]
Unregisters provided guild slash commands from the current guild.

## Syntax
```
$unregisterGuildCommands[Slash command name;...]
```

### Parameters
- `Slash command name` `(Type: String || Flag: Required)`: Name of the guild slash command to unregister. Use semicolons `;` as a separator to separate multiple guild slash command names.

## Example
```
$nomention
$argsCheck[>1;Provide guild slash command names!]

$unregisterGuildCommands[$unescape[$toLowercase[$replaceText[$trimSpace[$message]; ;]]]]
Successfully unregistered the provided guild slash commands!
```
![example](https://user-images.githubusercontent.com/95774950/198040479-f19497a7-e93b-4695-95fb-d8b629be5a1d.png)
