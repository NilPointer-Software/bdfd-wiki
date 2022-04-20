# $removeLinks
Removes links from a value.

## Usage
```php
$removeLinks[(text)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| text | The text to remove links from. **\*** | [String](/src/resources/arguments/types.md#string) | [Vacantable](/src/resources/arguments/flags.md#vacantable)

**\*** If no `text` is provided and the function is used without brackets, then all links are removed from the bot's reply. 

## Example
```
$nomention
$removeLinks[$noMentionMessage]
```
![](https://user-images.githubusercontent.com/69215413/123530440-40914e80-d6c8-11eb-9fa1-e1aa488a1c80.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*