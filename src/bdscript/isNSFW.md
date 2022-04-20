# $isNSFW
Returns whether the provided channel is NSFW (not-safe-for-work) or not. 'true' means the channel is NSFW, 'false' means it isn't.

## Usage
```php
$isNSFW[channelID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel to check. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)


## Example
```
$nomention
Is <#$channelID> NSFW?: `$isNSFW[$channelID]`
```
![](https://user-images.githubusercontent.com/69215413/123517430-dd270280-d66e-11eb-95cb-4edb5a9ed78c.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*