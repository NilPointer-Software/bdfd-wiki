# $modifyChannel
Edits a channel with the data provided.
>  🧠 **Tip:** You can use `!unchanged` as a argument for the option to remain in its current state.

## Usage
```php
$modifyChannel[channelID;(name;topic;nsfw;position;categoryID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| channelID | The channel to edit. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)
| name | The new channel name. | [String](/src/resources/arguments/types.md#string) | [Vacantable](/src/resources/arguments/flags.md#vacantable)
| topic | The new channel topic/description. | [String](/src/resources/arguments/types.md#string) | [Vacantable](/src/resources/arguments/flags.md#vacantable)
| nsfw | Whether the channel should be marked as NSFW. | [Bool](/src/resources/arguments/types.md#bool) | [Vacantable](/src/resources/arguments/flags.md#vacantable)
| position | The new channel position *(1 = top)* | [Integer](/src/resources/arguments/types.md#integer) | [Vacantable](/src/resources/arguments/flags.md#vacantable)
| categoryID | The category to put this channel under. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Vacantable](/src/resources/arguments/flags.md#vacantable)


> You can get a category's ID using [`$channelID[category name]`](./channelID.md)!

## Example
*For this example, we will be changing the channel name from 'general' to 'chill-chat'. As well as changing the channel topic to 'A chill chat!'.*
```
$nomention
$modifyChannel[$channelID[general];chill-chat;A chill chat!;!unchanged;!unchanged]
```
