# $botListDescription
Sets the description of this command, for the Bot Designer List command list (if the bot is on [Bot Designer List](https://botdesignerlist.com)).

## Usage
```php
$botListDescription[text]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| text | The command description. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$botListDescription[Ping? Pong!]
Pong!
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*