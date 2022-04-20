# $isBot
Returns whether or not the provided user is a bot. 'true' means the user is a bot, 'false' means the user is not a bot.

## Usage
```php
$isBot[userID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userID | The user to check. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
Bot? $isBot[$findUser[$message]]
```
![](https://user-images.githubusercontent.com/69215413/126853528-3af140c4-0c73-4091-bb6f-d1f6e3567bf5.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*