# $createChannel
Creates a new channel.

## Usage
```php
$createChannel[name;type;(categoryID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| name | The name of this new channel. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| type | The new channel's type. | [Enum](/src/resources/arguments/types.md#enum) ? [GeneralChannelTypes](/src/enumdefs/generalChannelTypes.md) | [Required](/src/resources/arguments/flags.md#required)
| categoryID |  The category to put the channel in. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** The `categoryID` argument can not be used if 'category' is provided as `type`.

## Examples
### Example #1
```
$nomention
$createChannel[cool-channel;text]
New channel created!
```

![](https://user-images.githubusercontent.com/69215413/125972519-26d1a5a1-f362-4101-abdd-6c3943e6811c.png)

![](https://user-images.githubusercontent.com/69215413/125972524-95307b17-bfcc-4525-a4fa-1d58a30a1fa9.png)

### Example #2
*This example shows getting the new channel's ID after creation.*
```
$nomention
$onlyPerms[managechannels;❌ You are missing the `MANAGE_CHANNELS` permission!]
$onlyBotPerms[managechannels;❌ I don't have the `MANAGE_CHANNELS` permission!]

$async[channelCreate]
  $createChannel[epic-channel;text]
$endasync

$await[channelCreate]

New channel created! Check it out here: <#$channelID[epic-channel]>.
```
![](https://user-images.githubusercontent.com/69215413/147581261-884569ba-251d-48dd-bdcb-5534e3753ce5.png)

> ⚠️ **Warning:** This example requires [BDScript 2](/src/guides/scriptingModes.md) enabled!

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*