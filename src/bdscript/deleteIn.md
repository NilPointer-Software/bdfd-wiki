# $deleteIn
Deletes the bot's response in after the provided duration.

## Usage
```php
$deleteIn[duration]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| duration | The time to wait before deleting the message. **\*** | [Duration](/src/resources/arguments/types.md#duration) | [Required](/src/resources/arguments/flags.md#required)

**\*** Max duration is `40m`.

## Example
```
$nomention
Hello World!
$deleteIn[3s]
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*