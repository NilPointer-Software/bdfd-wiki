# $guildExists
Returns 'true' if the provided server exists, otherwise 'false' is returned. It will always 'false' if the bot isn't present in the server.

## Usage
```php
$guildExists[guildID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| guildID | The ID of the hypothetical server. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*