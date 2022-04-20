# $findChannel
Finds a channel's ID from the given channel name, ID, or mention.

## Usage
```php
$findChannel[channel]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :----
| channel | The channel name/ID/mention to find. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Example
```
$nomention
$findChannel[$message]
```
![](https://user-images.githubusercontent.com/69215413/125977150-9e2ecfb6-8cd8-4934-a8b2-e869dd5a9592.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*