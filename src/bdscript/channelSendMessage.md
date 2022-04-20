# $channelSendMessage
Sends a message in the provided channel.

## Usage
```php
$channelSendMessage[channelID;message]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel to send the message in. | 
| message | The message that gets sent to the channel.

## Examples
### Example #1
```
$nomention
$channelSendMessage[$mentionedChannels[1;yes];Hello!]
```
> 🤔 **Explanation:** This example would send "Hello!" in the channel mentioned in the author's message, or the current channel if no channel is mentioned.

### Example #2
```
$nomention
$channelSendMessage[835108724846493726;Hello!]
```

> 🤔 **Explanation:** This example would send "Hello!" in the channel '835108724846493726'.

> ⚠️ **Warning:** This command will not work on your bot as it doesn't have access to the channel. Therefore to use the example, you should replace '835108724846493726' with a channel ID your bot has access to.

## Specifications
| Scripting Mode | Status
| --- | --- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*