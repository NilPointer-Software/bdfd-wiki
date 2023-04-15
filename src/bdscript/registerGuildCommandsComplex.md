# $registerGuildCommands[]
Registers provided guild slash commands in the current guild.

> 📝 Slash commands doesn't need to be enabled or marked as guild command.

## Syntax
```
$registerGuildCommands[Slash command name;...]
```

### Parameters
- `Slash command name` `(Type: String || Flag: Required)`: Name of the guild slash command to register. Use semicolons `;` as a separator to separate multiple guild slash command names.

## Example 1
```
$nomention
$registerGuildCommands[help]
Successfully registered the guild slash command `/help`!
```
![example](https://user-images.githubusercontent.com/111157596/231819571-1e42aa71-b661-4c7d-8d1f-c06d675f659a.png)

## Example 2
```
$nomention
$argsCheck[>1;Provide guild slash command names!]

$unregisterGuildCommands[$unescape[$toLowercase[$replaceText[$trimSpace[$message]; ;]]]]
Successfully registered the provided guild slash commands!
```
![example](https://user-images.githubusercontent.com/111157596/231820660-41ef683c-8410-484e-9db2-2bf1132cfcef.png)
