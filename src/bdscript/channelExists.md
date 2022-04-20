# $channelExists
Checks if the channel provided actually exists, in any of the server that the bot is in.
> 📝 **Note:** 'true' means the channel exists, 'false' means it doesn't.

## Usage
```php
$channelExists[channelID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The hypothetical channel that is checked. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$channelExists[$message]
```
> 🤔 **Explanation:** Returns whether or not the provided message is a valid channel ID.

**When Valid**

![](https://user-images.githubusercontent.com/69215413/141666396-130a4179-8b55-4e63-82c4-c89b8fa63050.png)

**When Invalid**

![](https://user-images.githubusercontent.com/69215413/141666393-5a317c8b-69b7-4648-a2c6-a187268f1f2e.png)

## Specifications
| Scripting Mode | Status
| --- | --- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*