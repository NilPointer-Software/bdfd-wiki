# $modifyChannel
Edits a channel with the data provided.

> You can use `!unchanged` as an parameter for the option to remain in its current state.

## Syntax
```
$modifyChannel[Channel ID;(Channel Name;Topic;Make NSFW?;Position;Category ID)]
```

### Parameters 
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel the bot will edit.
- `Channel Name` `(Type: String || Flag: Vacantable)`: New channel name.
- `Topic` `(Type: String || Flag: Vacantable)`: New channel topic/description.
- `Make NSFW?` `(Type: Bool || Flag: Vacantable)`: Whether the channel will be marked as NSFW or not.
- `Position` `(Type: Integer || Flag: Vacantable)`: The new channel position *(1 = top)*.
- `Category ID` `(Type: Snowflake || Flag: Vacantable)`: The category to which the channel should belong to.

> You can use `$channelID[category/channelName]` to get the ID of a category or channel.

### Permissions
Required permissions that the bot must have for this function to work properly :
- `managechannels`

## Example
*For this example, we will be changing the channel name from 'general' to 'chill-chat'. As well as changing the channel topic to 'A chill chat!'.*
```
$nomention
$modifyChannel[$channelID[general];chill-chat;A chill chat!;!unchanged;!unchanged]
```
