# $unregisterGuildCommands
Unregisters guild slash commands from the current guild.

## Usages
There are two usages of this function :

### Usage #1
#### Syntax
```
$unregisterGuildCommands
```
Unregisters all guild slash commands from the current guild.

#### Example
```
$nomention
$unregisterGuildCommands
Successfully unregistered all guild slash commands!
```
![Screenshot_20221026_184650](https://user-images.githubusercontent.com/95774950/198040434-101a9391-7f93-457a-b59e-adb8a7eda6b3.png)

### Usage #2
#### Syntax
```
$unregisterGuildCommands[Slash command name;...]
```
Unregisters provided guild slash commands from the current guild.

#### Parameters
- `Slash command name` `(Type: String || Flag: Required)`: Name of guild slash command to unregister. Use semicolons `;` as a separator to separate multiple guild slash command names.

#### Example
```
$nomention
$argsCheck[>1;Provide guild slash command names!]

$unregisterGuildCommands[$unescape[$toLowercase[$replaceText[$trimSpace[$message]; ;]]]]
Successfully unregistered the provided guild slash commands!
```
![Screenshot_20221026_185535](https://user-images.githubusercontent.com/95774950/198040479-f19497a7-e93b-4695-95fb-d8b629be5a1d.png)
