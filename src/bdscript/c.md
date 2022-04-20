# $c
Adds a comment to the code. Comments do not appear in the bot's response.

## Usage
```php
$c[comment]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| comment | The comment contents | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Example
```
$nomention
$noMentionMessage
$c[This is a say command. You are reading a comment!]
```
![](https://user-images.githubusercontent.com/69215413/127033510-b61a5806-c1b5-45f3-99d3-c4f932497322.png)

## Specifications
| Scripting Mode | Status
| --- | --- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*