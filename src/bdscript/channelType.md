# $channelType
Returns a channel's type - `text`/`voice`/`category`/`thread`/`stage`/`dm`/etc.

## Usage
```php
$channelType[channelID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel to get the type of. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$channelType[$channelID]
```
![](https://user-images.githubusercontent.com/69215413/141666799-a4c3cd07-af28-45a3-adb8-3613c0a5162f.png)

> 🤔 **Explanation:** This example returns the current channel's type.

## Specifications
| Scripting Mode | Status
| --- | --- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*