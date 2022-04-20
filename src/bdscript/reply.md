# $reply
[Replies](https://support.discord.com/hc/en-us/articles/360057382374-Replies-FAQ) to a message.

## Usage
```php
$reply[(messageID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| messageID | The message to reply to. **\***| [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

**\*** If no `messageID` is provided, and the function is used without brackets, then the bot will reply to the author's message.

## Examples
### Example #1
```
$nomention
$reply
Hello $username!
```
![](https://user-images.githubusercontent.com/69215413/126919464-204a6169-2acb-4237-b9f4-08bc04d786bf.png)


### Example #2
*Disabling the reply ping using [`$allowUserMentions[]`](./allowUserMentions.md):*
```
$nomention
$allowUserMentions[]
$reply
Hello $username!
```
![](https://user-images.githubusercontent.com/69215413/148702036-bf45e510-59a6-47cd-bbfa-194f1e590e21.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*