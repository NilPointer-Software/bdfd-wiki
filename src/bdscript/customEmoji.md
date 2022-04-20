# $customEmoji
Returns a custom emoji. 
> 🗒️ **Note:** We recommend [emoji IDs](/src/resources/usingEmojis.md) instead of `$customEmoji[]` for public bots, as `$customEmoji[]` only fetches emojis from the current server.

## Usage
```php
$customEmoji[emojiName]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| emojiName | The name of the emoji to return. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Example
```
$nomention
Hello there! $customEmoji[Wave]
```
![](https://user-images.githubusercontent.com/69215413/122825469-fa934f80-d2af-11eb-9563-67552204beb5.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*