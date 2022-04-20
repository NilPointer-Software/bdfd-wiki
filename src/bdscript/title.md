# $title
Sets the embed's title.

## Usage
```php
$title[text;(embedIndex)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| text | The text to set the title as. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
| embedIndex | The embed index, default is `1`. [(learn more)](/src/guides/embedIndexes.html) | [Integer](/src/resources/arguments/types.md#integer) | [Optional](/src/resources/arguments/flags.md#optional)

## Example
```
$nomention
$title[This is a title!]
$description[⬆️ That is a nice title.]
```
![](https://user-images.githubusercontent.com/69215413/123186040-4c310b00-d465-11eb-99b1-6c43828c8ddb.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*