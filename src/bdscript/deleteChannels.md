# $deleteChannels
Deletes the provided channel(s).

## Usage
```php
$deleteChannels[channelID;...]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel(s) to delete. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$onlyBotPerms[managechannels;❌ I need the `MANAGE_CHANNELS` permission to do that!]
$onlyPerms[managechannels;❌ You need the `MANAGE_CHANNELS` permission to use that!]
$argsCheck[>1;❌ Please mention a channel!]

$deleteChannels[$mentionedChannels[1]]
Successfully deleted $channelName[$mentionedChannels[1]]!
```
![](https://user-images.githubusercontent.com/69215413/122830487-65478980-d2b6-11eb-948b-652dd3800ff2.png)