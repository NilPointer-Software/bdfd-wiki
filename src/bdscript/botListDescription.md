# $botListDescription
Sets the description of this command, for the BDL command list (if the bot is on [Bot Designer List](https://botdesignerlist.com)).

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
Pong!
$botListDescription[Ping? Pong!]
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*