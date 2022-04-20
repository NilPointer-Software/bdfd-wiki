# $addTimestamp
Adds a timestamp to the embed.

## Usage
```php
$addTimestamp[(embedIndex)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| embedIndex |  The embed index, default is `1`. [(learn more)](/src/resources/embedIndexes.md) | [Integer](/src/resources/arguments/types.md#integer) | [Vacantable](/src/resources/arguments/flags.md#vacantable)

## Example
```
$nomention
$description[Hi!]
$footer[That is the timestamp =>]
$addTimestamp
```
![](https://user-images.githubusercontent.com/69215413/119733171-25bc8780-be47-11eb-9817-e5bb53d46af2.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*