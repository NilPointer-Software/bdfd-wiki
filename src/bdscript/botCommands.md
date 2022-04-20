# $botCommands
Returns all the bot's commands.

## Usage
```php
$botCommands[separator]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| separator | The separator between each command. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$title[Bot Commands]
$description[$botCommands[, ]]
```
![](https://user-images.githubusercontent.com/69215413/145657200-7c996505-c50d-449f-8562-1b2cecea888e.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*