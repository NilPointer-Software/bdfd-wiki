# $useChannel
The bot's response gets sent to the provided channel, rather than being sent to the current channel.\
This doesn't apply to error messages, or [`$channelSendMessage[]`](./channelSendMessage.md), [`$sendEmbedMessage[]`](./sendEmbedMessage.md). It does apply to [`$sendMessage[]`](./sendMessage.md), however.

## Usage
```php
$useChannel[channelID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel to redirect the bot's response to. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$useChannel[$mentionedChannels[1]]
$description[hi]
$title[hello]
```

![](https://user-images.githubusercontent.com/69215413/125665386-b0458227-97d7-4aaa-9ca8-b1d869245bce.png)

*Message in `#cool-channel`:*\
![](https://user-images.githubusercontent.com/69215413/125665365-ade65a36-0c1e-4e1c-a5c5-ad9929f769bc.png)


## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*