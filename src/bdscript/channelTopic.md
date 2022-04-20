# $channelTopic
Returns a channel's topic/description.

## Usage
```php
$channelTopic[(channelID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel to get the topic of. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)
 
**\*** If no channelID is provided then the current channel's topic is returned.

## Examples
### Example #1
```
$nomention
<#$channelID>'s channel topic is: $channelTopic
```

![](https://user-images.githubusercontent.com/69215413/127034232-384f3678-0010-4a97-bf89-9dd5963d8742.png)

> ⚠️ **Warning:** If a channel has no topic, then nothing is returned from `$channelType`. If you'd want to return a message when there is no topic to display, then use this code: `$replaceText[$replaceText[$checkCondition[$channelTopic==];true;None;-1];false;$channelTopic;-1]`. In this example, the current channel's topic is returned, if there is no topic then 'None' is returned. You can customize what message is displayed when there is no channel topic by replacing 'None' with your message.

### Example #2
```
$nomention
<#$mentionedChannels[1;yes]>'s channel topic is: $channelTopic[$mentionedChannels[1;yes]]
```
![](https://user-images.githubusercontent.com/69215413/145681364-ae98cba5-9c26-4623-9787-026437628f39.png)

> 🤔 **Explanation:** This example returns the channel topic of the channel mentioned in the author's message, or the current channel if no channel is mentioned.

## Specifications
| Scripting Mode | Status
| --- | --- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*