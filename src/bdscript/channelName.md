# $channelName
Returns a channel's name.

## Usage
```php
$channelName[channelID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel to get the name of. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Examples
### Example #1
```
$nomention
$channelName[$channelID]
```
![](https://user-images.githubusercontent.com/69215413/141666552-6bb3c643-58a3-4bc7-a495-7c4e0b3ff34c.png)

> 🤔 **Explanation:** This example returns the name of the current channel.

### Example #2
```
$nomention
$channelName[$mentionedChannels[1]]
```
![](https://user-images.githubusercontent.com/69215413/141666614-d75f576c-d539-46ff-9058-f7bc299e4b58.png)

> 🤔 **Explanation:** This example returns the name of the channel that the author mentioned in their message.

### Example #3
```
$nomention
$channelName[875867383825305711]
```
![](https://user-images.githubusercontent.com/69215413/141666646-d79d3393-b678-40cd-aed7-5e4d23ebb00a.png)

> 🤔 **Explanation:** This example returns the name of the specified channel ID.
> ⚠️ **Warning:** This command will not work on your bot as it doesn't have access to the channel. Therefore to use the example, you should replace '880165033974317106' with a channel ID your bot has access to.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ❌ |
| BDScript 2 | ✅ |
| BDScript Unstable | ❌ |

*✅ Supported | ❌ Unsupported*